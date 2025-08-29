import { TrashIcon, PencilIcon, CheckIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function TodoItem({ tarea, toggleCompleted, eliminarTarea, editarTarea }) {
  const [modoEdicion, setModoEdicion] = useState(false);
  const [nuevoTexto, setNuevoTexto] = useState(tarea.text);

  const guardarEdicion = () => {
    if (nuevoTexto.trim()) {
      editarTarea(tarea.id, nuevoTexto.trim());
      setModoEdicion(false);
    }
  };

  return (
    <div className="flex items-center gap-3 justify-between border-b border-gray-300 p-3 shadow-sm rounded">
      {modoEdicion ? (
        <input
          type="text"
          value={nuevoTexto}
          onChange={(e) => setNuevoTexto(e.target.value)}
          className="flex-1 p-1 border rounded"
          autoFocus
        />
      ) : (
        <span className={tarea.completed ? 'line-through text-gray-400' : ''}>
          {tarea.text}
        </span>
      )}

      <input
        className="w-4 h-4"
        type="checkbox"
        checked={tarea.completed}
        onChange={() => toggleCompleted(tarea.id)}
      />

      {modoEdicion ? (
        <button onClick={guardarEdicion}>
          <CheckIcon className="w-5 h-5 text-green-500" />
        </button>
      ) : (
        <button onClick={() => setModoEdicion(true)}>
          <PencilIcon className="w-5 h-5 text-blue-500" />
        </button>
      )}

      <button onClick={() => eliminarTarea(tarea.id)}>
        <TrashIcon className="w-5 h-5 text-red-500" />
      </button>
    </div>
  );
}