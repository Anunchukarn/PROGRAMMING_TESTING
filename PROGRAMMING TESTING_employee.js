function getEmployeeInfo(data, targetName) {
    // ค้นหาพนักงานที่มีชื่อตรงกัน
    const employee = data.find(employee => employee.name === targetName);
  
    // ตรวจสอบว่าพบพนักงานหรือไม่
    if (employee) {
      // Return สตริงที่จัดรูปแบบพร้อมชื่อและตำแหน่ง
      return `ชื่่อ${employee.name} ตำแหน่ง ${employee.position}`;
    } else {
      // Return employee not found
      return `Employee with name ${targetName} not found.`;
    }
  }
  
  //ฐานข้อมูล
  const employees = [
    { name: "Arm", position: "Front End" },
    { name: "Game", position: "Back End" },
  ];
  
  // Test Case 1
  const jannyInfo = getEmployeeInfo(employees, "Janny");
  console.log(jannyInfo); 
  
  // Test Case 2
  const gameInfo = getEmployeeInfo(employees, "Game");
  console.log(gameInfo); 
  