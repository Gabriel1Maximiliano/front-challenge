import { DataResp } from "../metrics/interfaces/metricsInterface";

export const handleClicksAverage = (
  data: DataResp[],
  setAverage: React.Dispatch<React.SetStateAction<number>>
) => {
  let suma = 0;
  data &&
    data.forEach((url) => {
      if (url.is_active === 0) {
        const result = (suma += url.amount_of_clicks / data.length).toFixed(2);
        return setAverage(Number(result));
      }
    });
};
