import FormEmbed from '../FormEmbed';

export default function FormEmbedExample() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <FormEmbed
        formUrl="https://forms.gle/BE1TENZbKCapdEw28"
        title="Tournament Registration"
        description="Fill out the form carefully to secure your slot"
      />
    </div>
  );
}
