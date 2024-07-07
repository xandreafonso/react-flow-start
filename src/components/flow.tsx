"use client";

import { useState, useCallback, useMemo } from 'react';

import 'reactflow/dist/style.css';
import ReactFlow, { Background, Controls, applyEdgeChanges, applyNodeChanges, addEdge } from 'reactflow';
import { InputText } from './input-text';
import { Text } from './text';


const initialNodes: any[] = [
  {
    id: '1a',
    type: 'inputText',
    position: { x: 0, y: 0 },
    data: {},
  }, {
    id: '1b',
    type: 'inputText',
    position: { x: 300, y: 0 },
    data: { },
  }, {
    id: '2a',
    type: 'text',
    position: { x: 100, y: 100 },
    data: { label: 'Hello' },
  }, {
    id: '2b',
    type: 'text',
    position: { x: 200, y: 100 },
    data: { label: 'Hello 2' },
  },
];

const initialEdges: any[] = [];

export function Flow() {

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const nodeTypes = useMemo(() => ({ inputText: InputText, text: Text }), []);

  const onNodesChange = useCallback(
    (changes: any) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  );

  const onEdgesChange = useCallback(
    (changes: any) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [],
  );

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [],
  );

  return (
    <div className="h-full w-full">
      <ReactFlow
        nodeTypes={nodeTypes}
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
