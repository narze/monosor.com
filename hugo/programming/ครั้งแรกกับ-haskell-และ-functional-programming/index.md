# ครั้งแรกกับ Haskell และ Functional Programming

เมื่อวันก่อนไปเรียน [Haskell For Noob][1] ที่ [SPRINT3R][2] [Geeky Base][3] มา ด้วยความที่ช่วงนี้เห็นภาษาแนว Functional มาแรงในช่วงนี้ ประกอบกับแย่งลงทะเบียนทันเวลา เลยมาลองดู

เริ่มจากการติดตั้ง Haskell ลงบนเครื่องตัวเอง คืนก่อนวันเรียนลองหาข้อมูลไปเจอกับตัว Haskell Stack เห็นว่ามันลงสะดวกดีก็เลยใช้ตัวนี้ (ในคลาสก็ใช้เหมือนกัน) ลงในแมคคำสั่งเดียวใช้ได้เลย ใช้ [Homebrew][4] `brew install haskell-stack`

เนื่องจากเป็นคลาสเบื้องต้น เกือบทั้งวันเลยใช้แค่ GHC (Glasgow Haskell Compiler) เป็นคอมไพเลอร์ที่นิยมใช้กัน กับ GHCi เป็น Interpreter คล้ายๆ กับ irb ใน Ruby เอาไว้ลองศึกษาหรือลองโค้ดเล่นๆ ได้ดี

GHCi ที่มากับตัว Stack รันด้วยคำสั่ง `stack ghci` แล้ว โหลดไฟล์ .hs ด้วยคำสั่ง `:load filename.hs` ในคลาสที่เรียนนี้จะใช้วิธีแก้ไฟล์ .hs แล้วใน GHCi ก็รีโหลดด้วยคำสั่ง `:reload` ให้คอมไพล์ตัวไฟล์เข้ามาใหม่เพื่อรันคำสั่งแต่ละ Function ว่าใช้งานได้ถูกต้องหรือไม่

สิ่งที่ได้จากคลาสนี้ :

  * เข้าใจคำว่า Functional Programming มากขึ้นเยอะ จากตอนที้เรียน Prolog สมัยมหาลัยฯ แล้วแทบไม่เข้าใจว่าทำไม Paradigm มันแปลกๆ และดูใช้งานยากจังเลย
  * รื้อฟื้นการเขียน Recursive Function ที่แทบไม่ได้ใช้เลยตอนเขียนเว็บ
  * ที่มาของ `map`, `reduce` ที่เห็นในภาษาอื่นๆ ก็เป็น Functional นั่นเอง
  * เหตุผลที่ Functional Programming มาเริ่มฮิตเมื่อไม่นานมานี้ คือเรื่องของประสิทธิภาพในการคำนวนที่สูงขึ้นกว่าแต่ก่อน และ Concurrency Programming
  * [Currying][5] ไม่ได้เกี่ยวกับแกงกะหรี่!
  * [Code ที่เขียน][6], [Lecture ที่จด][7]

สุดท้ายนี้ขอขอบคุณ [@iporsut][8] ที่เปิดโลก Functional Programming ให้ เพื่อนๆ ที่ร่วมเรียนร่วมแชร์ความรู้กัน และ SPRINT3R สำหรับสถานที่ครับ

 [1]: https://www.eventpop.me/e/336
 [2]: https://www.facebook.com/SPRINT3RGroup/
 [3]: https://www.facebook.com/geekybase/
 [4]: http://brew.sh/
 [5]: https://en.wikipedia.org/wiki/Currying
 [6]: https://github.com/narze/sandbox/blob/master/haskell/hello_world/Main.hs
 [7]: https://github.com/narze/sandbox/blob/master/haskell/README.md
 [8]: https://twitter.com/iporsut

