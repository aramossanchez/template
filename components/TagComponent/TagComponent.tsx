interface TagComponentProps {
  text: string;
}

export default function TagComponent({ text }: TagComponentProps) {
  return (
    <span className="text-sm text-quaternaryColor cursor-pointer font-bold hover:underline">
      #{text}
    </span>
  );
}
