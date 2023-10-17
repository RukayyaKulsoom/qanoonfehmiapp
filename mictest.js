import React ,{ useRef }from 'react';
import { SafeAreaView,  View ,StyleSheet, StatusBar } from 'react-native';
import QuillEditor, { QuillToolbar } from 'react-native-cn-quill';

 function Mictest() {

  const _editor = React.createRef();

  return (
 
          <SafeAreaView>
              <ScrollView>
                  <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}	style={{ flex: 1 }}>
                      <Text>Description:</Text>
                      <RichEditor
                          ref={richText}
                          onChange={ descriptionText => {
                              console.log("descriptionText:", descriptionText);
                          }}
                      />
                  </KeyboardAvoidingView>
              </ScrollView>
  
              <RichToolbar
                  editor={richText}
                  actions={[ actions.setBold, actions.setItalic, actions.setUnderline, actions.heading1, ]}
                  iconMap={{ [actions.heading1]: ({tintColor}) => (<Text style={[{color: tintColor}]}>H1</Text>), }}
              />
          </SafeAreaView>
      );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingVertical: 10,
  },
  root: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#eaeaea',
  },
  editor: {
    flex: 1,
    padding: 0,
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 30,
    marginVertical: 5,
    backgroundColor: 'white',
  },
});
export { Mictest }