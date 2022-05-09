import filmes from '../models/Filmes.js';

class FilmesController {

    static mostrarFilmes = (req, res) => {
        filmes.find((err, filmes) => {
            res.status(200).json(filmes);
        })
    }

    static mostrarUmFilme = (req, res) => {
        const { id } = req.params;
        filmes.findById(id, (err,filme) => {
            if (err) {
                res.status(500).send({ message: `${err} - erro ao buscar id` });
                return;
            }
            res.status(200).send(filme);
        })
    }

    static inserirFilme = (req, res) => {
        const filme = new filmes(req.body)
        filme.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err} - erro ao inserir filme` });
                return;
            }
            res.status(201).send(filme.toJSON());
        })
    }

    static atualizarFilme = (req, res) => {
        const { id } = req.params;
        filmes.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (err) {
                res.status(500).send({ message: `${err} - erro ao atualizar` });
                return;
            }
            res.status(200).send({message: "filme atualizado com sucesso"});
        })
    }

    static deletarUm = (req, res) => {
        const { id } = req.params;
        filmes.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({ message: err.message });
                return
            }
            res.status(200).send({message: "filme deletado com sucesso"})
        })
    }
}

export default FilmesController;