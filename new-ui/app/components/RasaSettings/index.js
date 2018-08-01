import React from 'react';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';

import PropTypes from 'prop-types';
import { Grid, TextField, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/xml';
import 'brace/mode/json';
import 'brace/theme/terminal';

import messages from './messages';

const styles = {
  panelContent: {
      display: 'inline',
      fontSize: '14px',
      fontWeight: 300,
      color: '#4e4e4e',
      width: '95%'
  },
  settingEditorLabel: {
      paddingBottom: '20px',
      fontSize: '12px',
      color: '#a2a7b1',
  },
}

/* eslint-disable react/prefer-stateless-function */
export class RasaSettings extends React.Component {

  render() {
    const { classes, intl, settings } = this.props;
    return (
      <Grid container spacing={16}>
        <Grid container item xs={12}>
          <Typography className={classes.panelContent}>
            <FormattedMessage {...messages.rasaSettingDescription} />
          </Typography>
        </Grid>
        <Grid container spacing={16} item xs={12}>
          <Grid item lg={12} md={8} sm={12} xs={12}>
            <TextField
              id='rasaURL'
              label={intl.formatMessage(messages.rasaURL)}
              value={settings.rasaURL}
              placeholder={intl.formatMessage(messages.rasaURLPlaceholder)}
              onChange={evt => {
                this.props.onChangeSettingsData('rasaURL', evt.target.value);
              }}
              margin='normal'
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
              helperText={intl.formatMessage(messages.requiredField)}
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography
            className={classes.settingEditorLabel}
            id='domainClassifierPipeline'
          >
            <FormattedMessage {...messages.domainClassifierPipeline} />
          </Typography>
          <AceEditor
            width='100%'
            height='300px'
            mode='json'
            theme='terminal'
            name='domainClassifierPipeline'
            readOnly={false}
            onChange={value =>
              this.props.onChangeSettingsData('domainClassifierPipeline', value)
            }
            fontSize={14}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={settings.domainClassifierPipeline}
            setOptions={{
              useWorker: false,
              showLineNumbers: true,
              tabSize: 2,
            }}
            editorProps={{
              $blockScrolling: Infinity
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            className={classes.settingEditorLabel}
            id='intentClassifierPipeline'
          >
            <FormattedMessage {...messages.intentClassifierPipeline} />
          </Typography>
          <AceEditor
            width='100%'
            height='300px'
            mode='json'
            theme='terminal'
            name='intentClassifierPipeline'
            readOnly={false}
            onChange={value =>
                this.props.onChangeSettingsData('intentClassifierPipeline', value)
            }
            fontSize={14}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={settings.intentClassifierPipeline}
            setOptions={{
              useWorker: false,
              showLineNumbers: true,
              tabSize: 2
            }}
            editorProps={{
              $blockScrolling: Infinity
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            className={classes.settingEditorLabel}
            id='entityClassifierPipeline'
          >
            <FormattedMessage {...messages.entityClassifierPipeline} />
          </Typography>
          <AceEditor
            width='100%'
            height='300px'
            mode='json'
            theme='terminal'
            name='entityClassifierPipeline'
            readOnly={false}
            onChange={value =>
              this.props.onChangeSettingsData('entityClassifierPipeline', value)
            }
            fontSize={14}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={settings.entityClassifierPipeline}
            setOptions={{
              useWorker: false,
              showLineNumbers: true,
              tabSize: 2
            }}
            editorProps={{
              $blockScrolling: Infinity
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            className={classes.settingEditorLabel}
            id='spacyPretrainedEntities'
          >
            <FormattedMessage {...messages.spacyPretrainedEntities} />
          </Typography>
          <AceEditor
            width='100%'
            height='300px'
            mode='json'
            theme='terminal'
            name='spacyPretrainedEntities'
            readOnly={false}
            onChange={value =>
              this.props.onChangeSettingsData('spacyPretrainedEntities', value)
            }
            fontSize={14}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={settings.spacyPretrainedEntities}
            setOptions={{
              useWorker: false,
              showLineNumbers: true,
              tabSize: 2
            }}
            editorProps={{
              $blockScrolling: Infinity
            }}
          />
        </Grid>
      </Grid>
    );
  }
}

RasaSettings.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired,
  settings: PropTypes.object,
  onChangeSettingsData: PropTypes.func,
};

export default injectIntl(withStyles(styles)(RasaSettings));