const EmailTemplate = ({
  name,
  email,
  subject,
  content,
}: {
  name: string;
  email: string;
  subject: string;
  content: string;
}) => {
  return (
    <div>
      <p>Subject: {subject}</p>
      <p>Name: {name}</p>
      <p>email: {email}</p>
      <p>content: {content}</p>
    </div>
  );
};

export default EmailTemplate;
