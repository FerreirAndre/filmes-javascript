import mongoose from 'mongoose';

const filmesSchema = new mongoose.Schema(
    {
        id: { type: String },
        titulo: { type: String },
        diretor: { type: String },
        imdb: { type: Number }
    }
)

const filmes = mongoose.model('filmes', filmesSchema);

export default filmes;