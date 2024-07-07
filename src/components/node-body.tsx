"use client";

import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

export function NodeBody({ children }: { children: React.ReactNode }) {

  return <>
    <div className="max-w-56 border-2 border-slate-500 bg-slate-100 rounded py-2 px-4 flex flex-col items-center justify-center">
      {children}
    </div>
  </>
}