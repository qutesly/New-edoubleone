"use client";

import EmptyComp from "@/components/EmptyComp";
import { getPaymentMethods } from "@/redux/actions/auth";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";

const BillingPage = () => {
  const { loading, paymentMethods } = useAppSelector((s) => s.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPaymentMethods());
  }, []);
  return (
    <>
      <Box mb={6} className="flex">
        <Typography flex={1} variant="h5">
          Payment Methods
        </Typography>
      </Box> 

      <EmptyComp />
    </>
  );
};

export default BillingPage;
