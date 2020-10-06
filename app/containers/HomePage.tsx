import { Button, Theme, WithStyles, createStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import fs from 'fs';

const styles =({ spacing }: Theme) => createStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing(1),
  }
});

interface HomePageProps extends WithStyles<typeof styles> {}

class HomePage extends React.Component<HomePageProps> {
  // https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications
  handleFileChange = (e:  React.FormEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    if (files && files.length > 0) {
      let rawData = fs.readFileSync(files[0].path);
      let SWData = JSON.parse(rawData.toString());
      console.log('SWData', SWData);
    } else {
      console.error('could not read selected files');
    }
  }

  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        Home page
        <Button variant="contained" color="primary" component="label">
          Load Summoners War JSON file
          <input
            type="file"
            style={{ display: "none" }}
            onChange={this.handleFileChange}
          />
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);
