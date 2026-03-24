'use client';

import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';

interface AddToCartButtonProps {
  slug: string;
  name: string;
  image: string;
}

export default function AddToCartButton({ slug, name, image }: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem({ slug, name, image });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleAdd}
      className={`inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl cursor-pointer ${
        added
          ? 'bg-[#25d366] text-white'
          : 'bg-white text-[#2e7d32] border-2 border-[#2e7d32] hover:bg-[#2e7d32] hover:text-white'
      }`}
    >
      {added ? (
        <>
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Adicionado!
        </>
      ) : (
        <>
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Adicionar ao Carrinho
        </>
      )}
    </button>
  );
}
