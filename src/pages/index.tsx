//import Image from "next/image";
//import { Inter } from "next/font/google";
//const inter = Inter({ subsets: ["latin"] });




export default function Home() {

  const nome='reinaldo2'
  let canal = 'reinaldo3'

  function retnome(){ 
    return canal
    }
    
 
  return (
    <main>
      <div> {retnome()}</div>
      <div>Teste2</div>
      <div>React</div>
      <div>React</div>
    </main>
  )
}
