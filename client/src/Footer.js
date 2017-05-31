import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';

class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <Avatar id="avatars" size={70} src="https://avatars1.githubusercontent.com/u/9052109?v=3&u=f09abd4d6cb519b4e88382a5457467112a909d53&s=400" />
                <Avatar id="avatars" size={70} src="https://avatars1.githubusercontent.com/u/9052109?v=3&u=f09abd4d6cb519b4e88382a5457467112a909d53&s=400" />
                <Avatar id="avatars" size={70} src="https://avatars1.githubusercontent.com/u/9052109?v=3&u=f09abd4d6cb519b4e88382a5457467112a909d53&s=400" />
                <div>
                    © 2014 Copyright
                </div>
            </footer>
        )
    }
}

export default Footer;