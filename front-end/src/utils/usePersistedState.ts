import { useState, useEffect } from 'react';

{/* KEY: chave de recuperação */}
function usePersistedState(key: string, initialState: any) {
    const [state, setState] = useState(() => {
        {/* buscar lá do storage */}
        const storageValue = localStorage.getItem(key);

        if(storageValue) { {/* se existir */}
            return JSON.parse(storageValue); {/* vai fazer uma recuperação do nosso storageValue*/}
        } else {
            return initialState;
        }
    });

    {/* toda vez que o estado é alterado o useEffect grava no localStorage, usando o JSON.stringify para gravar*/}
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
}

export default usePersistedState;