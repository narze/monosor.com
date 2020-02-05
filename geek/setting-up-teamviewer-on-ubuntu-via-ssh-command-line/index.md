# Setting up TeamViewer on Ubuntu via SSH command line

  1. SSH into Ubuntu `ssh user@your.ubuntu.host`
  2. Download TeamViewer (32-bit) using wget or curl : `wget http://download.teamviewer.com/download/teamviewer_i386.deb`
  3. Install it `sudo dpkg -i teamviewer_linux.deb`
  4. If dependency problem occurs `sudo apt-get -f install` then install again `sudo dpkg -i teamviewer_linux.deb`
  5. `sudo teamviewer setup` then enter your TeamViewer account username & password
  6. `sudo teamviewer daemon start` to start TeamViewer daemon
  7. `sudo teamviewer daemon enable` to enable starting TeamViewer on boot

