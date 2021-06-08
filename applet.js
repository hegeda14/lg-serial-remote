const Applet = imports.ui.applet;
const Util = imports.misc.util;
const PopupMenu = imports.ui.popupMenu;
const St = imports.gi.St;
const Lang = imports.lang;

function LGSerialRemote(orientation, panel_height, instance_id) {
    this._init(orientation, panel_height, instance_id);
}

LGSerialRemote.prototype = {
    __proto__: Applet.IconApplet.prototype,

    _init: function(orientation, panel_height, instance_id) {
        Applet.IconApplet.prototype._init.call(this, orientation, panel_height, instance_id);

        this.set_applet_icon_name("monitor");
        this.set_applet_tooltip(_("LG TV/monitor - Parancs küldése"));

        this.menuManager = new PopupMenu.PopupMenuManager(this);
        this.menu = new Applet.AppletPopupMenu(this, orientation);
        this.menuManager.addMenu(this.menu);

        this._contentSection = new PopupMenu.PopupMenuSection();
        this.menu.addMenuItem(this._contentSection);

        let item = new PopupMenu.PopupMenuItem("Bekapcsolás");
        item.connect('activate', Lang.bind(this, function() {
            Util.spawnCommandLine(`/usr/bin/python3 ${__dirname}/libLGTV_serial/LGTV.py --poweron`);
            Util.spawnCommandLine(`notify-send --icon=monitor --hint=int:transient:1 "LG Serial Remote" "Bekapcsolás parancs elküldve!"`);
        }));
        this.menu.addMenuItem(item);

        item = new PopupMenu.PopupMenuItem("Kikapcsolás");
        item.connect('activate', Lang.bind(this, function() {
            Util.spawnCommandLine(`/usr/bin/python3 ${__dirname}/libLGTV_serial/LGTV.py --poweroff`);
            Util.spawnCommandLine(`notify-send --icon=monitor --hint=int:transient:1 "LG Serial Remote" "Kikapcsolás parancs elküldve!"`);
        }));
        this.menu.addMenuItem(item);

        item = new PopupMenu.PopupMenuItem("DVI");
        item.connect('activate', Lang.bind(this, function() {
            Util.spawnCommandLine(`/usr/bin/python3 ${__dirname}/libLGTV_serial/LGTV.py --inputdvi`);
            Util.spawnCommandLine(`notify-send --icon=monitor --hint=int:transient:1 "LG Serial Remote" "DVI bemenetválasztás parancs elküldve!"`);
        }));
        this.menu.addMenuItem(item);

        item = new PopupMenu.PopupMenuItem("VGA");
        item.connect('activate', Lang.bind(this, function() {
            Util.spawnCommandLine(`/usr/bin/python3 ${__dirname}/libLGTV_serial/LGTV.py --inputvga`);
            Util.spawnCommandLine(`notify-send --icon=monitor --hint=int:transient:1 "LG Serial Remote" "VGA bemenetválasztás parancs elküldve!"`);
        }));
        this.menu.addMenuItem(item);

        item = new PopupMenu.PopupMenuItem("HDMI");
        item.connect('activate', Lang.bind(this, function() {
            Util.spawnCommandLine(`/usr/bin/python3 ${__dirname}/libLGTV_serial/LGTV.py --inputhdmi`);
            Util.spawnCommandLine(`notify-send --icon=monitor --hint=int:transient:1 "LG Serial Remote" "HDMI bemenetválasztás parancs elküldve!"`);
        }));
        this.menu.addMenuItem(item);

        item = new PopupMenu.PopupMenuItem("AV1");
        item.connect('activate', Lang.bind(this, function() {
            Util.spawnCommandLine(`/usr/bin/python3 ${__dirname}/libLGTV_serial/LGTV.py --inputav1`);
            Util.spawnCommandLine(`notify-send --icon=monitor --hint=int:transient:1 "LG Serial Remote" "AV1 bemenetválasztás parancs elküldve!"`);
        }));
        this.menu.addMenuItem(item);

        item = new PopupMenu.PopupMenuItem("AV2");
        item.connect('activate', Lang.bind(this, function() {
            Util.spawnCommandLine(`/usr/bin/python3 ${__dirname}/libLGTV_serial/LGTV.py --inputav2`);
            Util.spawnCommandLine(`notify-send --icon=monitor --hint=int:transient:1 "LG Serial Remote" "AV2 bemenetválasztás parancs elküldve!"`);
        }));
        this.menu.addMenuItem(item);
    },

    on_applet_clicked: function() {
        this.menu.toggle();
    }
};

function main(metadata, orientation, panel_height, instance_id) {
    return new LGSerialRemote(orientation, panel_height, instance_id);
}