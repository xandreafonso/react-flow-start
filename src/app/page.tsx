import { Flow } from '@/components/flow';
import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';


export default function Home() {
  return <div className="h-full w-full flex items-center justify-center bg-slate-950">    
    <main className="h-4/6 w-8/12 flex items-center justify-center">
      <Flow />
    </main>
  </div>
}
