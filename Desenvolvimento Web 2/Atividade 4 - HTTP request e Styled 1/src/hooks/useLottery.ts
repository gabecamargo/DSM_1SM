import { useContext } from "react";
import { LotteryContext } from "../contexts/LotteryContext";

export const useLottery = () => useContext(LotteryContext);
