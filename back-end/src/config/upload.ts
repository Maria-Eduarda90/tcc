import multer from 'multer';
import path from 'path';

export default {
    // salvando as imagens no disco
    storage: multer.diskStorage({
        // diretorio onde vai salvar as imagens
        destination: path.join(__dirname, '..', '..', 'uploads'),
        filename: (request, file, cb) => {
            // data + o nome do arquivo
            const fileName = `${Date.now()}-${file.originalname}`;

            cb(null, fileName)
        }
    })
}