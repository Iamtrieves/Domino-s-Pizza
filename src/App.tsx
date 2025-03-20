import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div>
      <MainLayout>
        <HomePage />
      </MainLayout>
    </div>
  );
};

export default App;
