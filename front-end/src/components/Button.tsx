import '../styles/components/button.css';

interface ButtonProps {
    children: string;
    // style?: any;
}

export function Button(props: ButtonProps){
    return(
        <button>
            {props.children}
        </button>
    );
}