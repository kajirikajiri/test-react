import type { NextPage } from 'next'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const { value, setValue } = useStruct()
  const { value: value2 } = value
  
  useEffect(()=>{
    console.log(0, value.value)
  }, [value.value])
  useEffect(()=>{
    console.log(1, value.value2.value3)
  }, [value.value2.value3])
  
  return (
    <>
      {value.value}
      {value.value2.value3}
      {value2}
      <button onClick={()=>setValue((v: Struct) => {
        v.value = "helllll"
        return {...v}
      })}>aiu</button>
    </>
  )
}

export default Home

type Struct = {
  value: string
  value2: {
    value3: string
  }
}

type ReadonlyStruct = Readonly<Struct>

const useStruct = () => {
  const [value, setValue] = useState<ReadonlyStruct>({
    value: "ta",
    value2: {
      value3: "ho"
    }
  })
  return {
    value,
    setValue,
  }
}

const useStruct2 = () => {
  const a= new Struct2()
  const b = {...a}
  const [value, setValue] = useState<Struct2>()
}

class Struct2 {
  readonly value: string = ""
  static instance: Struct2
  constructor() {
    if (!Struct2.instance) {
      Struct2.instance = this
    }
  }
  getInstance() {
    return Struct2.instance
  }
  setValue(value: string) {
    const i = this.getInstance();
    (i as any).value = value
  }
}
