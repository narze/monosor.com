# ลงแอพแมคแบบไม่ต้องเข้าเว็บด้วย Homebrew Cask

ทุกครั้งที่ลงแมคใหม่ ด้วยความที่เป็นคนชอบใช้โปรแกรมเยอะมาก ก็จะเริ่มจากการโหลดทุกอย่างให้ครบซะก่อนจะทำอะไรอย่างอื่น ไล่เรียงออกมาจะได้ประมาณนี้

  * [Google Chrome][1] (สมัยยังใช้ Windows พูดเป็นประจำว่า &#8220;IE มีไว้เพื่อโหลด Chrome&#8221;) เดี๋ยวนี้ยังดีที่เซ็ตติ้งทุกอย่าง Sync มาได้เลย เมื่อก่อนต้องก๊อปโปรไฟล์มาแปะตลอด
  * [Dropbox][2] พวกเซ็ตติ้งของแอพอื่นๆ ที่ไม่มี Sync ก็เอาไว้ในนี้ แต่เดี๋ยวนี้เริ่มหันไปใช้ BTSync
  * [Evernote][3] ช่วงนี้จะโดนโพสโจมตีบ่อยๆ แต่ก็ยังจงรักภักดีอยู่ แถมยังลืมยกเลิกสมาชิกรายปีอีกตะหาก
  * [Slack][4] ไว้คุยงาน
  * Text Editor ต่างๆ ([Atom][5], [Sublime Text][6])
  * [iTerm2][7] แทน Terminal
  * [Alfred 2][8] แทน Spotlight Search (เมื่อก่อนใช้ Quicksilver เพราะฟรี)
  * [Karabiner][9] ทำปุ่มลัดแบบ Geek สุดๆ
  * มีอีกเยอะมากๆ

<!--more-->

ถ้าเป็นเมื่อก่อนก็ใช้เวลาทั้งวัน เพราะกว่าจะหาเว็บ เข้าไปโหลด เปิดไฟล์ ลากไปวางใน `/Applications` หรือบางตัวก็คลิกเปิด .pkg กด Nextๆๆ เช็คว่ามีไป่ตู้แถมมาด้วยไหม #เดี๋ยวๆ

ทีนี้ไปเจอ [Homebrew Cask][10] เข้า มันคือตัวที่จะช่วยให้เราลงโปรแกรมเหล่านี้ได้ในการพิมพ์บรรทัดเดียว ต่อแอพนึง แล้วเราไม่ต้องทำอะไรเลยเพราะมันจะ Install ให้เราเสร็จสรรพ

ตัว Homebrew Cask นั้นเป็นตัวเสริมของ [Homebrew][11] อีกทีนึง ถ้าใครไม่รู้จัก มันคือ Package Manager ที่เอาไว้ลงนู่นนี่บนเครื่องแมค ผ่าน Terminal ครับ แต่ถ้าเป็น Homebrew เฉยๆ มันจะมีแต่พวก Command Line Tools เช่น git, tmux, node.js เป็นต้น

ซึ่งถ้าเราจะใช้งาน Homebrew Cask เราต้องติดตั้ง Homebrew ก่อน โดยเปิด Terminal ขึ้นมาแล้วรันคำสั่งนี้

`ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

(อาจจะต้องลง Xcode command line tools ด้วยถ้ายังไม่เคยลง)

`xcode-select --install`

เมื่อติดตั้งเสร็จเรียบร้อยก็ลง Homebrew Cask ต่อเลย

`brew install caskroom/cask/brew-cask`

ทีนี้พอเสร็จแล้วเราสามารถใช้ Homebrew Cask ได้ด้วยคำสั่งที่คล้ายๆ กันกับ Homebrew เพียงแต่เราต้องเพิ่มคำว่า cask เข้าไป เช่น

`brew cask install google-chrome`

เพื่อโหลดแอพ Google Chrome หรือ

`brew cask install slack atom evernote`

เพื่อลงหลายๆ แอพพร้อมกัน

ถ้าไม่แน่ใจว่ามีแอพใน Homebrew Cask รึเปล่า ให้เช็คด้วยคำสั่ง search ตามด้วยชื่อแอพ เช่น

`brew cask search baidu`

ถ้ามีโปรแกรมไหนชื่อตามนี้หรือคล้ายๆ กัน ก็จะโผล่มาให้เราเห็น

[<img class="alignnone wp-image-5 size-large" src="http://monosor.com/wp-content/uploads/2015/11/Screen-Shot-2015-11-23-at-1.05.40-AM-1024x202.png" alt="brew cask search baidu" width="660" height="130" srcset="https://monosor.com/wp-content/uploads/2015/11/Screen-Shot-2015-11-23-at-1.05.40-AM-1024x202.png 1024w, https://monosor.com/wp-content/uploads/2015/11/Screen-Shot-2015-11-23-at-1.05.40-AM-300x59.png 300w, https://monosor.com/wp-content/uploads/2015/11/Screen-Shot-2015-11-23-at-1.05.40-AM.png 1124w" sizes="(max-width: 660px) 100vw, 660px" />][12]

ดันมีจริงๆ ซะด้วย&#8230;

พอใช้ไปซักพักถ้าแอพมีการอัพเดทแต่ภายในแอพไม่มีตัว Audoupdate เราสามารถใช้ `brew cask install appname --force` เพื่อบังคับให้ลงใหม่ได้

แต่ก่อนหน้านั้นควรใช้คำสั่ง `brew cask update` ก่อนเพื่อดึงข้อมูลเวอร์ชั่นใหม่สุดของแต่ละแอพเข้ามาเก็บไว้ก่อนครับ

อันนี้เป็นโปรแกรมต่างๆ ที่ผมลงในปัจจุบันด้วย Cask ครับ

<div class="oembed-gist">
  <noscript>
    View the code on <a href="https://gist.github.com/narze/0a5b4a7ac21d1e3cb947">Gist</a>.
  </noscript>
</div>

 [1]: https://www.google.com/chrome/browser
 [2]: https://dropbox.com
 [3]: https://evernote.com
 [4]: https://slack.com
 [5]: https://atom.io
 [6]: http://www.sublimetext.com/
 [7]: https://iterm2.com
 [8]: https://www.alfredapp.com
 [9]: https://pqrs.org/osx/karabiner
 [10]: http://caskroom.io
 [11]: http://brew.sh
 [12]: http://monosor.com/wp-content/uploads/2015/11/Screen-Shot-2015-11-23-at-1.05.40-AM.png

