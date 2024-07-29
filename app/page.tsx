import InputTodo from "@/components/InputTodo";
import ListTodo from "@/components/ListTodo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <div className="max-w-8xl w-full">
        <InputTodo />
        <ListTodo />
        <Footer />
      </div>
    </main>
  );
}
