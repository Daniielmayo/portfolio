import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  email: string;
  textarea: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email,
  textarea,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <p>te ha concatado {email}</p>
    <p>{textarea}</p>
  </div>
);
