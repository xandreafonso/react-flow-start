"use client";

import { useCallback } from 'react';
import { Handle, HandleType, Position } from 'reactflow';

type Props = {
  type: HandleType,
  position: Position,
};

export function NodeHandle({ type, position }: Props) {
  return <Handle type={type} position={position} className={`h-2 w-4 rounded-sm border-2 border-slate-500 bg-slate-600 ${type === 'target' ? 'bg-slate-600' : 'bg-slate-900'}`} />
}