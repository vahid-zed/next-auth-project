import { BsExclamationTriangle } from "react-icons/bs";
import { CardWrapper } from "@/components/auth/card-wrapper";

export const ErrorCard = () => {
  return (
    <CardWrapper
      backButtonHref="/auth/login"
      backButtonLabel="Back to Login"
      headerLabel="Oops! Something went wrong">
      <div className="w-full flex justify-center">
        <BsExclamationTriangle className="text-destructive"></BsExclamationTriangle>
      </div>
    </CardWrapper>
  );
};
