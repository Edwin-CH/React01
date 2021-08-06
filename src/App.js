
import './App.css';
import C01header from './componentes/C01header';
import C01navbar from './componentes/C01navbar';
import C03section1 from './componentes/C03section1';
import C04section2 from './componentes/C04section2';



function App() {
  return (
  <div className="container">
      <C01header/>
      <C01navbar/>
      <C03section1/>
      <C04section2/>

	<footer class="row bg-dark text-light">
		footer
	</footer>

  </div>
  
  );
  
}
export default App;
