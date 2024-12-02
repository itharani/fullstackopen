const Total = ({parts}) => {
    // console.log("before")
    // console.log(parts.length)
  
    const calcTotal = () => {
      console.log("after")
      let total = 0
      for(let i = 0; i < parts.length; i++){
          total += parts[i].exercises
      }
      // console.log(total)
      return total
    }
  
    const  methodReduce = () => {
      const total = parts.reduce((acc, curr) => acc + curr.exercises, 0)
      
      return total
    }
  
    return (
      <p>
        <strong>
          total of {methodReduce()} exercises
        </strong>
      </p>
    )
  }

  export default Total