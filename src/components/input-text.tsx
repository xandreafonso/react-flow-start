import { Position } from "reactflow";
import { NodeBody } from "./node-body";
import { NodeHandle } from "./node-handle";

export function InputText() {
  return <>
    <NodeHandle position={Position.Top} type="target" />
    <NodeBody>
      <input className="nodrag w-full border-2 border-slate-200 bg-white outline-none px-2 py-1" />
    </NodeBody>
    <NodeHandle position={Position.Bottom} type="source" />
  </>
}