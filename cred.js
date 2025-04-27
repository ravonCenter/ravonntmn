async function getSheetData() {
  const url = 'https://script.google.com/macros/s/AKfycbyVCST9CpMFi1Xe6h3JZVJ35ebjzcgPgg61KAAhtZvmfo4IragKDkltmbeW7JDXqHqu/exec';
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("Sheet Data:", data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

console.log(getSheetData());
