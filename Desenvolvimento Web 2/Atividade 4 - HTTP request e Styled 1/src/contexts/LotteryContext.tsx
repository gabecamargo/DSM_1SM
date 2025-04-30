import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { LotteryResponse } from "../types/lottery";

interface LotteryContextType {
  data: LotteryResponse | null;
  loading: boolean;
}

export const LotteryContext = createContext<LotteryContextType>({
  data: null,
  loading: true,
});

export const LotteryProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<LotteryResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/home/ultimos-resultados")
      .then(response => {
        const megasena = response.data.loterias.find((l: any) => l.tipoJogo === "megasena");
        setData(megasena);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <LotteryContext.Provider value={{ data, loading }}>
      {children}
    </LotteryContext.Provider>
  );
};
