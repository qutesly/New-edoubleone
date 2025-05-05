import MastCard from "@/components/icons/mastercard.svg";
import Visa from "@/components/icons/visa.svg";
import { getPaymentMethods } from "@/redux/actions/auth";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { paymentMEthods } from "@/utils/constants";
import {
  Box,
  ButtonBase,
  CircularProgress,
  Radio,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { FC, useEffect } from "react";
interface Props {
  value: string;
  onChange: (v: string) => void;
}
const PaymentMethodInput: FC<Props> = ({ onChange, value }) => {
  const { loading, paymentMethods } = useAppSelector((s) => s.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPaymentMethods());
  }, []);
  return (
    <Box width={"100%"}>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <Typography>How would you like to pay?</Typography>

          <ButtonBase
            sx={{ width: "100%", mt: 3 }}
            onClick={() => onChange("new")}
          >
            <Box
              className="flex"
              sx={{
                width: "100%",
                borderRadius: 4,
                py: 1.5,
                px: 2,
                border:
                  value === "new"
                    ? "1px solid var(--primary)"
                    : "1px solid #fff2",
              }}
            >
              <Radio checked={value === "new"} />
              <Typography
                flex={1}
                align="left"
                sx={{
                  ml: 2,
                  color: value === "new" ? "#fff" : "var(--secondary-tet)",
                }}
              >
                New Credit Card
              </Typography>
              <Image
                style={{ height: 24, width: 24, objectFit: "contain" }}
                src={paymentMEthods[0]?.image}
                alt=""
              />
            </Box>
          </ButtonBase>

          {paymentMethods?.map((cur) => (
            <ButtonBase
              key={cur.id}
              sx={{ width: "100%", mt: 3 }}
              onClick={() => onChange(cur.id)}
            >
              <Box
                key={cur.id}
                className="flex"
                sx={{
                  width: "100%",
                  borderRadius: 4,
                  py: 1.5,
                  px: 2,
                  border:
                    cur.id === value
                      ? "1px solid var(--primary)"
                      : "1px solid #fff2",
                }}
              >
                <Radio checked={value === cur.id} />
                <Box flex={1} textAlign={"left"} ml={2}>
                  <Typography
                    textTransform={"capitalize"}
                    fontWeight={700}
                    sx={{
                      color: value === cur.id ? "#fff" : "var(--secondary-tet)",
                    }}
                  >
                    {cur.card.brand} ---- ---- ---- ---- {cur.card.last4}.
                  </Typography>
                  <Typography
                    fontWeight={200}
                    className="text"
                    variant="caption"
                  >
                    Expires {cur.card.exp_month}/{cur.card.exp_year}
                  </Typography>
                </Box>

                {cur.card.brand === "visa" ? (
                  <Visa height={40} width={50} />
                ) : cur.card.brand === "mastercard" ? (
                  <MastCard height={40} width={50} />
                ) : (
                  <Image
                    style={{ height: 24, width: 24, objectFit: "contain" }}
                    src={paymentMEthods[0]?.image}
                    alt=""
                  />
                )}
              </Box>
            </ButtonBase>
          ))}
        </>
      )}
    </Box>
  );
};
export default PaymentMethodInput;
