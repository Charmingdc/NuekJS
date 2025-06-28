const main = document.querySelector('#main');

const filePath1 = "../fileComponents/components.nuek";
const filePath2 = "../fileComponents/components2.nuek"

async function file_data(file){
  if(!file) {
    return;
  }
  
  try {
    const response = await fetch(file);
    if(!response.ok){
      throw new Error("\nCouldn't read from *nuek File properly: try checking the component filePath");
    }
    var text = await response.text();
    
    main.innerHTML += text;
    
  }catch(error) {
    console.error("An error occurred while reading *.nuek component: \n", error.message);
  }
}

  file_data(filePath1);
  file_data(filePath2);