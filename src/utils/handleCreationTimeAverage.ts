/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { DataResp } from "../metrics/interfaces/metricsInterface"


export const handleCreationTimeAverage = ( data:DataResp[]=[],setAverage: React.Dispatch<React.SetStateAction<bigint>> ) => {
    let suma = 0n;
    const divisor = data && data.length;
  
    if (divisor === 0) {
      setAverage(0n);
      return;
    }
  
    data.forEach((url) => {
      if (url.is_active === 0) {
        suma += BigInt(url.retrieved_time);
      }
    });
   
   const average = (suma / BigInt(divisor));
   
    setAverage(average);
}
