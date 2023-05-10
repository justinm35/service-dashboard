export const convertToBase64 = (file: Blob) : Promise<string>=> {
    return new Promise((resolve, reject) => {
        let baseURL :  string | ArrayBuffer | null = "";
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
        baseURL  = reader.result;
        if(baseURL === null) {
            reject('error')
        }else{
            resolve(baseURL as string);
        }
        };
      });
}   