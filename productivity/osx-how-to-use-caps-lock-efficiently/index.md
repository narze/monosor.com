# [OSX] วิธีใช้ประโยชน์จากปุ่ม Caps Lock

ปุ่ม Caps Lock นี่ปกติก็แทบไม่ได้ใช้อยู่แล้ว แถมบางครั้งยังน่ารำคาญเพราะทำให้เราพิมพ์ผิดเป็นตัวใหญ่ _ฆณ์ฮฉฐฐฯ๊็_

อย่าง [Colemak][1] ก็เปลี่ยนฟังก์ชั่นของปุ่มนี้เป็น Backspace แต่ยังมีวิธีอื่นที่ทำอะไรได้มากกว่านั้น ด้วยการทำให้มันเป็น Hyper Key

Hyper Key เอามาจากปุ่ม Modifier ที่มีในคีย์บอร์ด [Space Cadet][2] นอกเหนือจาก Ctrl, Super และ Meta (เดี๋ยวนี้เหลือแต่ Ctrl, Super และ Alt)

ซึ่งเราจะใช้ Hyper ร่วมกับปุ่มอื่นๆ เพื่อสร้าง Shortcut แบบกดง่ายจำง่ายของตัวเองกัน

เริ่มจากโหลดโปรแกรมที่จำเป็นกันก่อน คือ [Seil][3] กับ [Karabiner][4]

เราจะให้ Hyper Key เป็นการกด Ctrl, Alt (Option), Cmd, Shift พร้อมกันทั้งหมด จะได้ไม่ไปซ้ำกับโปรแกรมอะไรเลยเพราะมันกดยากมาก เราจะใช้ Seil เพื่อ Remap Caps Lock เป็นปุ่มอื่นที่ไม่มีบนคีย์บอร์ดก่อน เช่น F19 แล้วค่อยใช้ Karabiner Remap F19 เป็น Ctrl + Option + Cmd + Shift อีกทีนึง

เริ่มจากเปิด Seil แล้วปรับให้ Keycode ของ Caps Lock เป็น 80 ตรงกับ F19 ในตารางด้านล่าง

<a href="https://monosor.com/wp-content/uploads/2016/03/Screenshot-2016-03-03-02.06.01.png" rel="attachment wp-att-27"><img class="alignnone size-full wp-image-27" src="https://monosor.com/wp-content/uploads/2016/03/Screenshot-2016-03-03-02.06.01.png" alt="Seil" width="780" height="734" srcset="https://monosor.com/wp-content/uploads/2016/03/Screenshot-2016-03-03-02.06.01.png 780w, https://monosor.com/wp-content/uploads/2016/03/Screenshot-2016-03-03-02.06.01-300x282.png 300w, https://monosor.com/wp-content/uploads/2016/03/Screenshot-2016-03-03-02.06.01-768x723.png 768w" sizes="(max-width: 780px) 100vw, 780px" /></a>

ต่อไปเปิด Karabiner แล้วไปที่แท็บ Misc & Uninstall แล้วกด Open private.xml จากนั้นคลิกขวาที่ไฟล์แล้ว Open With > Text Edit หรือโปรแกรม Text Editor ตัวไหนก็ได้

จากนั้นนำโค้ดนี้ไปแปะไว้ระหว่าง `<root>` และ `</root>`

    <item>
        <name>Remap F19 to Hyper</name>
        <appendix>OS X doesn't have a Hyper. This maps F19 to Control + Shift + Option + Command.</appendix>

        <identifier>usercustom.f19_to_hyper</identifier>

        <autogen>
            --KeyToKey--
            KeyCode::F19,

            KeyCode::COMMAND_R,
            ModifierFlag::OPTION_R | ModifierFlag::SHIFT_R | ModifierFlag::CONTROL_R
        </autogen>
    </item>


เซฟไฟล์ private.xml จากนั้นกลับมาที่โปรแกรม Karabiner แท็บ Change Key กด Reload XML จากนั้นค้นหาและติ๊กที่ช่อง `Remap F19 to Hyper`

<a hrefs="http://monosor.com/wp-content/uploads/2016/03/Screenshot-2016-03-03-02.16.04.png" rel="attachment wp-att-28"><img class="alignnone size-full wp-image-28" src="https://monosor.com/wp-content/uploads/2016/03/Screenshot-2016-03-03-02.16.04.png" alt="Screenshot 2016-03-03 02.16.04" width="912" height="754" srcset="https://monosor.com/wp-content/uploads/2016/03/Screenshot-2016-03-03-02.16.04.png 912w, https://monosor.com/wp-content/uploads/2016/03/Screenshot-2016-03-03-02.16.04-300x248.png 300w, https://monosor.com/wp-content/uploads/2016/03/Screenshot-2016-03-03-02.16.04-768x635.png 768w" sizes="(max-width: 912px) 100vw, 912px" /></a>

เท่านี้ก็จะได้ปุ่ม Hyper key เอาไปใช้ทำ Shortcut ต่างๆ ได้มากมาย ที่ใช้อยู่เช่น

  * เปิด Sublime Text ด้วย Hyper + S
  * แอพอีเมล (Polymail) : Hyper + M
  * Google Chrome : Hyper + C
  * Slack : Hyper + A
  * iTerm2 : Hyper + T
  * Dash : Hyper + D

ถ้าอยากให้ทำอะไรได้มากกว่านี้ เช่นถ้ากด Caps Lock เดี่ยวๆ จะกลายเป็น Esc แทน (มีประโยชน์เมื่อใช้ร่วมกับ vim) ให้โหลด private.xml จากที่นี่ไปลงทับของเก่าได้เลย https://github.com/jasonrudolph/keyboard/blob/master/karabiner/private.xml

Sources :

  * [Fake Hyper key for OSX][5]
  * [A useful Caps Lock Key][6]
  * [Beyond Ctrl: Make That Caps Lock Key Useful][7]
  * [Toward a more useful keyboard][8]

 [1]: http://colemak.com/
 [2]: https://en.wikipedia.org/wiki/Space-cadet_keyboard
 [3]: https://pqrs.org/osx/karabiner/seil.html.en
 [4]: https://pqrs.org/osx/karabiner/
 [5]: http://www.tenshu.net/p/fake-hyper-key-for-osx.html
 [6]: http://brettterpstra.com/2012/12/08/a-useful-caps-lock-key/
 [7]: http://www.economyofeffort.com/2014/08/11/beyond-ctrl-remap-make-that-caps-lock-key-useful/
 [8]: https://github.com/jasonrudolph/keyboard

