import { Position } from "reactflow";
import { NodeBody } from "./node-body";
import { NodeHandle } from "./node-handle";

export function Text({ data }: any) {
  return <>
    <NodeHandle position={Position.Top} type="target" />
    <NodeBody>
      {data?.label}
    </NodeBody>
  </>
}