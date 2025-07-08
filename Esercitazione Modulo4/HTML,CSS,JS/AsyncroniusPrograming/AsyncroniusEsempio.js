// Esempio di programmazione asincrona

    // 1. Esempio con CALLBACK
    function getDataWithCallback(callback, onError) {
      setTimeout(() => {
        try {
          const data = "Dati ricevuti via Callback";
          callback(data);
        } catch (error) {
          onError(error);
        }
      }, 2000);
    }

    getDataWithCallback(
      function(data) {
        console.log("Callback:", data);
      },
      function(error) {
        console.error("Errore nella callback:", error);
      }
    );

    
    // 2. Esempio con PROMISE
    function getDataWithPromise() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          try {
            resolve("Dati ricevuti via Promise");
          } catch (error) {
            reject(error);
          }
        }, 2000);
      });
    }

    getDataWithPromise()
      .then(data => {
        console.log("Promise:", data);
      })
      .catch(error => {
        console.error("Errore nella Promise:", error);
      });


    // 3. Esempio con ASYNC/AWAIT
    async function getDataAsyncAwait() {
      try {
        const data = await getDataWithPromise();
        console.log("Async/Await:", data);
      } catch (error) {
        console.error("Errore con async/await:", error);
      }
    }

    getDataAsyncAwait();

    console.log("Fine esecuzione main");
