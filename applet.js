const Applet = imports.ui.applet;
const Util = imports.misc.util;
const PopupMenu = imports.ui.popupMenu;
const Lang = imports.lang;
const Settings = imports.ui.settings;

class LGSerialRemote extends Applet.TextIconApplet {
    constructor(orientation, panel_height, instance_id) {
        super(orientation, panel_height, instance_id);

        this.set_applet_icon_name("monitor");
        this.set_applet_tooltip(_("LG TV/monitor - Send command"));

        this.menuManager = new PopupMenu.PopupMenuManager(this);
        this.menu = new Applet.AppletPopupMenu(this, orientation);
        this.menuManager.addMenu(this.menu);

        this.settings = new Settings.AppletSettings(this, "lg-serial-remote@hegeda14", instance_id);
        this.settings.bind("file-select", "lgtv_path", this.on_settings_changed);

        this._contentSection = new PopupMenu.PopupMenuSection();
        this.menu.addMenuItem(this._contentSection);

        let item = new PopupMenu.PopupMenuItem("Turn on");
        item.connect('activate', Lang.bind(this, function() {
            if(!this.lgtv_path.includes('LGTV.py')) {
                Util.spawnCommandLine(`notify-send --icon=monitor --hint=int:transient:1 "LG Serial Remote" "Please, configure the path of LGTV.py!"`);
                return;
            }
            Util.spawnCommandLine(`/usr/bin/python3 ${this.lgtv_path.replace('file://', '')} --poweron`);
            Util.spawnCommandLine(`notify-send --icon=monitor --hint=int:transient:1 "LG Serial Remote" "Turn on command sent!"`);
        }));
        this.menu.addMenuItem(item);

        item = new PopupMenu.PopupMenuItem("Turn off");
        item.connect('activate', Lang.bind(this, function() {
            if(!this.lgtv_path.includes('LGTV.py')) {
                Util.spawnCommandLine(`notify-send --icon=monitor --hint=int:transient:1 "LG Serial Remote" "Please, configure the path of LGTV.py!"`);
                return;
            }
            Util.spawnCommandLine(`/usr/bin/python3 ${this.lgtv_path.replace('file://', '')} --poweroff`);
            Util.spawnCommandLine(`notify-send --icon=monitor --hint=int:transient:1 "LG Serial Remote" "Turn off command sent!"`);
        }));
        this.menu.addMenuItem(item);

        item = new PopupMenu.PopupMenuItem("DVI");
        item.connect('activate', Lang.bind(this, function() {
            if(!this.lgtv_path.includes('LGTV.py')) {
                Util.spawnCommandLine(`notify-send --icon=monitor --hint=int:transient:1 "LG Serial Remote" "Please, configure the path of LGTV.py!"`);
                return;
            }
            Util.spawnCommandLine(`/usr/bin/python3 ${this.lgtv_path.replace('file://', '')} --inputdvi`);
            Util.spawnCommandLine(`notify-send --icon=monitor --hint=int:transient:1 "LG Serial Remote" "DVI input change command sent!"`);
        }));
        this.menu.addMenuItem(item);

        item = new PopupMenu.PopupMenuItem("VGA");
        item.connect('activate', Lang.bind(this, function() {
            if(!this.lgtv_path.includes('LGTV.py')) {
                Util.spawnCommandLine(`notify-send --icon=monitor --hint=int:transient:1 "LG Serial Remote" "Please, configure the path of LGTV.py!"`);
                return;
            }
            Util.spawnCommandLine(`/usr/bin/python3 ${this.lgtv_path.replace('file://', '')} --inputvga`);
            Util.spawnCommandLine(`notify-send --icon=monitor --hint=int:transient:1 "LG Serial Remote" "VGA input change command sent!"`);
        }));
        this.menu.addMenuItem(item);

        item = new PopupMenu.PopupMenuItem("HDMI");
        item.connect('activate', Lang.bind(this, function() {
            if(!this.lgtv_path.includes('LGTV.py')) {
                Util.spawnCommandLine(`notify-send --icon=monitor --hint=int:transient:1 "LG Serial Remote" "Please, configure the path of LGTV.py!"`);
                return;
            }
            Util.spawnCommandLine(`/usr/bin/python3 ${this.lgtv_path.replace('file://', '')} --inputhdmi`);
            Util.spawnCommandLine(`notify-send --icon=monitor --hint=int:transient:1 "LG Serial Remote" "HDMI input change command sent!"`);
        }));
        this.menu.addMenuItem(item);

        item = new PopupMenu.PopupMenuItem("AV1");
        item.connect('activate', Lang.bind(this, function() {
            if(!this.lgtv_path.includes('LGTV.py')) {
                Util.spawnCommandLine(`notify-send --icon=monitor --hint=int:transient:1 "LG Serial Remote" "Please, configure the path of LGTV.py!"`);
                return;
            }
            Util.spawnCommandLine(`/usr/bin/python3 ${this.lgtv_path.replace('file://', '')} --inputav1`);
            Util.spawnCommandLine(`notify-send --icon=monitor --hint=int:transient:1 "LG Serial Remote" "AV1 input change command sent!"`);
        }));
        this.menu.addMenuItem(item);

        item = new PopupMenu.PopupMenuItem("AV2");
        item.connect('activate', Lang.bind(this, function() {
            if(!this.lgtv_path.includes('LGTV.py')) {
                Util.spawnCommandLine(`notify-send --icon=monitor --hint=int:transient:1 "LG Serial Remote" "Please, configure the path of LGTV.py!"`);
                return;
            }
            Util.spawnCommandLine(`/usr/bin/python3 ${this.lgtv_path.replace('file://', '')} --inputav2`);
            Util.spawnCommandLine(`notify-send --icon=monitor --hint=int:transient:1 "LG Serial Remote" "AV2 input change command sent!"`);
        }));
        this.menu.addMenuItem(item);
    }

    on_settings_changed() {
        Util.spawnCommandLine(`notify-send --icon=monitor --hint=int:transient:1 "LG Serial Remote" "LGTV.py path selected:\n${this.lgtv_path}"`);
    }

    on_applet_clicked() {
        this.menu.toggle();
    }

    on_applet_removed_from_panel() {
        this.settings.finalize();
    }
};

function main(metadata, orientation, panel_height, instance_id) {
    return new LGSerialRemote(orientation, panel_height, instance_id);
}