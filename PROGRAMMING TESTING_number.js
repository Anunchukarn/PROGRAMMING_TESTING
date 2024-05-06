function sortNumbersByFrequency(input) {
    // สร้าง Map เก็บค่าความถี่ของตัวเลขแต่ละตัว
    const frequencyMap = new Map();
    for (const num of input) {
      if (frequencyMap.has(num)) {
        frequencyMap.set(num, frequencyMap.get(num) + 1);
      } else {
        frequencyMap.set(num, 1);
      }
    }
  
    // แปลง Map เป็น Array of [ตัวเลข, ความถี่]
    const numFrequencyPairs = Array.from(frequencyMap.entries());
  
    // เรียงลำดับ Array ตามความถี่ (น้อยไปหามาก) และตามตัวเลข (น้อยไปหามาก)
    numFrequencyPairs.sort((pair1, pair2) => {
      const frequencyDiff = pair1[1] - pair2[1];
      if (frequencyDiff !== 0) {
        return frequencyDiff;
      } else {
        return pair1[0] - pair2[0];
      }
    });
  
    // สร้าง Array ผลลัพธ์
    const result = [];
  
    // วนลูปผ่าน Array ที่เรียงลำดับแล้ว
    for (const [num, frequency] of numFrequencyPairs) {
      // เพิ่มตัวเลขลงใน Array ผลลัพธ์ ตามจำนวนความถี่
      for (let i = 0; i < frequency; i++) {
        result.push(num);
      }
    }
  
    return result;
  }
  
  const input = [2, 3, 4, 4, 34, 6, 7, 2, 3, 7, 8, 8, 8, 7, 9, 10, 41, 8];
  const sortedNumbers = sortNumbersByFrequency(input);
  console.log(sortedNumbers); // ผลลัพธ์: [6, 9, 10, 34, 41, 2, 2, 3, 3, 4, 4, 7, 7, 7, 8, 8, 8, 8]
  