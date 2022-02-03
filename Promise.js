 
    
    const showMessage = () => {       // callback function called by resolve function
        return "JOb Done....."          
    }
    function test1() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(showMessage());
            // reject(new Error('Whhpos!'))
            console.log("test1");
          }, 1000);
      });
    }
    async function test2() {
    // test1().then((res) => console.log("resolve", res))
    // .catch(res => console.log("reject", res))
    await test1();
      console.log("test2");
    }
    test2();
    

