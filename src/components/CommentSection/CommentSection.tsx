import { useState } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Kasensju",
      text: "Achei esse primeiro capítulo Incrível! Espero que tenha muito mais capítulos!",
      date: "1 dia atrás",
      votes: 42,
      replies: [
        {
          id: 11,
          author: "Kelmkez",
          text: "Concordo! Mal começou e já quero muito mais dele :D",
          date: "12 horas atrás",
          votes: 1,
        },
      ],
    },
    {
      id: 2,
      author: "Norota54",
      text: "Sensacional! Apesar de novo, consigo sentir uma boa trama que pode ser desenvolvida. Ansioso pelos próximos capítulos!",
      date: "3 dias atrás",
      votes: 7,
      replies: [],
    },
  ]);

  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = () => {
    if (!newComment.trim()) return;
    const newCommentObj = {
      id: Date.now(),
      author: "Você",
      text: newComment,
      date: "Agora mesmo",
      votes: 0,
      replies: [],
    };
    setComments([newCommentObj, ...comments]);
    setNewComment("");
  };

  return (
    <div className="bg-black text-white p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Comentários</h2>

      {/* Campo para adicionar comentários */}
      <div className="mb-6">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-3 bg-gray-800 text-white rounded-md resize-none"
          rows={3}
          placeholder="Deixe seus pensamentos em relação ao que acabou de ler..."
        />
        <button
          onClick={handleCommentSubmit}
          className="bg-red-500 px-4 py-2 mt-2 rounded-md hover:bg-red-600"
        >
          Comentar
        </button>
      </div>

      {/* Ordenação */}
      <div className="flex justify-end gap-4 text-sm text-gray-400 mb-4">
        <button className="hover:text-white">Mais votados</button>
        <button className="hover:text-white">Mais recentes</button>
        <button className="hover:text-white">Mais antigos</button>
      </div>

      {/* Lista de Comentários */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="border-t border-gray-700 pt-4">
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <button className="text-gray-500 hover:text-white">▲</button>
                <span className="text-sm">{comment.votes}</span>
                <button className="text-gray-500 hover:text-white">▼</button>
              </div>
              <div className="flex-1">
                <h3 className="font-bold">{comment.author}</h3>
                <p className="text-sm text-gray-400">{comment.date}</p>
                <p className="mt-2">{comment.text}</p>
                <button className="text-sm text-red-500 hover:underline mt-2">
                  Responder
                </button>

                {/* Respostas */}
                <div className="mt-4 pl-6 border-l border-gray-600 space-y-4">
                  {comment.replies.map((reply) => (
                    <div key={reply.id} className="flex items-start gap-4">
                      <div className="flex flex-col items-center">
                        <button className="text-gray-500 hover:text-white">
                          ▲
                        </button>
                        <span className="text-sm">{reply.votes}</span>
                        <button className="text-gray-500 hover:text-white">
                          ▼
                        </button>
                      </div>
                      <div>
                        <h3 className="font-bold">{reply.author}</h3>
                        <p className="text-sm text-gray-400">{reply.date}</p>
                        <p className="mt-2">{reply.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Botão de carregar mais comentários */}
      <div className="mt-6 text-center">
        <button className="bg-red-500 px-6 py-2 rounded-md hover:bg-red-600">
          Carregar mais comentários
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
