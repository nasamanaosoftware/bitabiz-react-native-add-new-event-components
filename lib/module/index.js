import React, { useEffect, useState } from "react";
import { View, SafeAreaView, ScrollView, TouchableOpacity, Text, TextInput } from "react-native";
export const AddEventComponents = () => {
  const [typeList, setTypeList] = useState([{
    title: 'Sick',
    haveSubType: false
  }]);
  const [subTypeList, setSubTypeList] = useState([{
    title: 'Travel - EU'
  }]);
  const [displaySubType, setDisplaySubType] = useState(false);
  const [selectedType, setSelectedType] = useState({
    title: 'Sick',
    haveSubType: false
  });
  const [selectedSubType, setSelectedSubType] = useState({
    title: 'Work from home'
  });
  const [displayTypeListDropdown, setDisplayTypeListDropdown] = useState(false);
  const [displaySubTypeListDropdown, setDisplaySubTypeListDropdown] = useState(false);
  const [startDate, setStartDate] = useState('2023-01-06');
  // const [startTime, setStartTime] = useState('13:43');
  // const [endDate, setEndDate] = useState('2023-01-06');
  // const [endTime, setEndTime] = useState('14:43');

  const [displayStartDateForm, setDisplayStartDateForm] = useState(false);
  // const [displayEndDateForm, setDisplayEndDateForm] = useState(false);
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(1990);
  const initialDateForm = date => {
    const splitedDate = date === null || date === void 0 ? void 0 : date.split('-');
    setDay(parseInt(splitedDate[2]));
    setMonth(parseInt(splitedDate[1]));
    setYear(parseInt(splitedDate[0]));
  };
  const dateSetter = stateSetter => {
    const _day = day < 10 ? '0' + day : day;
    const _month = month < 10 ? '0' + month : month;
    const _year = year;
    stateSetter === null || stateSetter === void 0 ? void 0 : stateSetter(_year + '-' + _month + '-' + _day);
  };
  const onPressTypeListButton = () => {
    setDisplayTypeListDropdown(!displayTypeListDropdown);
  };
  const onPressTypeItem = item => {
    setSelectedType(item);
    setDisplaySubType(item === null || item === void 0 ? void 0 : item.haveSubType);
    setDisplayTypeListDropdown(false);
  };
  const onPressSubTypeListButton = () => {
    setDisplaySubTypeListDropdown(!displaySubTypeListDropdown);
  };
  const onPressSubTypeItem = item => {
    setSelectedSubType(item);
    setDisplaySubTypeListDropdown(false);
  };

  /*
  const getDateFormat = (date: any, time: any) => {
      const dateTime = new Date(date + ' ' + time + ':00');
      
      const day = (dateTime.getDay() + 1) < 10 ? '0' + (dateTime.getDay() + 1) : (dateTime.getDay() + 1);
      const month = (dateTime.getMonth() + 1) < 10 ? '0' + (dateTime.getMonth() + 1) : (dateTime.getMonth() + 1);
      const year = dateTime.getFullYear();
       return day + '.' + month + '.' + year;
  }
   const getTimeFormat = (date: any, time: any) => {
      const dateTime = new Date(date + ' ' + time + ':00');
       const hour = dateTime.getHours() < 10 ? '0' + dateTime.getHours() : dateTime.getHours();
      const minute = dateTime.getMinutes() < 10 ? '0' + dateTime.getMinutes() : dateTime.getMinutes();
       return hour + ':' + minute;
  }
  */

  useEffect(() => {
    console.log('welcome');
    setTypeList([{
      title: 'Sick',
      haveSubType: false
    }, {
      title: 'Out of Office >',
      haveSubType: true
    }, {
      title: 'Time registration',
      haveSubType: false
    }, {
      title: 'Overtime/Time off',
      haveSubType: false
    }, {
      title: 'Mileage',
      haveSubType: false
    }]);
    setSubTypeList([{
      title: 'Travel - EU'
    }, {
      title: 'Seminar'
    }, {
      title: 'Private appointment'
    }, {
      title: 'Travel - US'
    }, {
      title: 'Work from home'
    }, {
      title: 'Day off'
    }]);
  }, []);
  const renderDateForm = (stateSetter, displaySetter) => {
    return /*#__PURE__*/React.createElement(View, {
      style: {
        position: 'absolute'
      }
    }, /*#__PURE__*/React.createElement(View, {
      style: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'grey',
        borderStyle: 'solid'
      }
    }, /*#__PURE__*/React.createElement(View, {
      style: {
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement(TouchableOpacity, {
      onPress: () => setDay(day + 1),
      style: {
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Text, {
      style: {
        color: 'black'
      }
    }, "^")), /*#__PURE__*/React.createElement(TextInput, {
      value: day.toString(),
      onChangeText: text => setDay(parseInt(text)),
      keyboardType: "numeric",
      style: {
        padding: 8
      }
    }), /*#__PURE__*/React.createElement(TouchableOpacity, {
      onPress: () => setDay(day - 1),
      style: {
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Text, {
      style: {
        color: 'black'
      }
    }, "V"))), /*#__PURE__*/React.createElement(View, {
      style: {
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement(TouchableOpacity, {
      onPress: () => setMonth(month + 1),
      style: {
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Text, {
      style: {
        color: 'black'
      }
    }, "^")), /*#__PURE__*/React.createElement(TextInput, {
      value: month.toString(),
      onChangeText: text => setMonth(parseInt(text)),
      keyboardType: "numeric",
      style: {
        padding: 8
      }
    }), /*#__PURE__*/React.createElement(TouchableOpacity, {
      onPress: () => setMonth(month - 1),
      style: {
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Text, {
      style: {
        color: 'black'
      }
    }, "V"))), /*#__PURE__*/React.createElement(View, {
      style: {
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement(TouchableOpacity, {
      onPress: () => setMonth(month + 1),
      style: {
        height: 40,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Text, {
      style: {
        color: 'black'
      }
    }, "^")), /*#__PURE__*/React.createElement(TextInput, {
      value: month.toString(),
      onChangeText: text => setMonth(parseInt(text)),
      keyboardType: "numeric",
      style: {
        padding: 8
      }
    }), /*#__PURE__*/React.createElement(TouchableOpacity, {
      onPress: () => setMonth(month - 1),
      style: {
        height: 40,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Text, {
      style: {
        color: 'black'
      }
    }, "V")))), /*#__PURE__*/React.createElement(View, {
      style: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'grey',
        borderStyle: 'solid'
      }
    }, /*#__PURE__*/React.createElement(TouchableOpacity, {
      onPress: () => {
        dateSetter(stateSetter);
        displaySetter === null || displaySetter === void 0 ? void 0 : displaySetter(false);
      }
    }, /*#__PURE__*/React.createElement(Text, {
      style: {
        color: 'black'
      }
    }, "Ok"))));
  };

  // MARK: Render
  return /*#__PURE__*/React.createElement(SafeAreaView, {
    testID: "dashboardScreen",
    style: {
      flex: 1,
      backgroundColor: 'white'
    },
    shouldRasterizeIOS: true
  }, /*#__PURE__*/React.createElement(View, {
    testID: "dashboardMainContainer",
    style: {
      flex: 1
    },
    shouldRasterizeIOS: true
  }, /*#__PURE__*/React.createElement(View, {
    style: {
      paddingHorizontal: 20,
      paddingVertical: 16,
      borderBottomColor: 'grey',
      borderBottomWidth: 1,
      borderStyle: 'solid'
    }
  }, /*#__PURE__*/React.createElement(Text, {
    style: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 20
    }
  }, "Add Event")), /*#__PURE__*/React.createElement(ScrollView, {
    style: {
      flex: 1,
      paddingHorizontal: 20,
      paddingVertical: 12
    }
  }, /*#__PURE__*/React.createElement(View, {
    style: {
      flex: 1,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Text, {
    style: {
      color: 'black',
      marginBottom: 6
    }
  }, "Type"), /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: () => onPressTypeListButton(),
    style: {
      flex: 1,
      flexDirection: 'row',
      paddingHorizontal: 20,
      paddingVertical: 12,
      borderWidth: 1,
      borderColor: 'grey',
      borderStyle: 'solid',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Text, {
    style: {
      color: 'black'
    }
  }, selectedType === null || selectedType === void 0 ? void 0 : selectedType.title), /*#__PURE__*/React.createElement(Text, {
    style: {
      color: 'black'
    }
  }, "V")), displayTypeListDropdown && /*#__PURE__*/React.createElement(View, {
    style: {
      position: 'absolute',
      zIndex: 100,
      backgroundColor: 'white',
      top: 70,
      width: '100%',
      paddingHorizontal: 20,
      paddingVertical: 12,
      borderWidth: 1,
      borderColor: 'grey',
      borderStyle: 'solid'
    }
  }, typeList === null || typeList === void 0 ? void 0 : typeList.map(item => /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: () => onPressTypeItem(item),
    style: {
      flex: 1,
      paddingHorizontal: 20,
      paddingVertical: 12
    }
  }, /*#__PURE__*/React.createElement(Text, {
    style: {
      color: 'black'
    }
  }, item === null || item === void 0 ? void 0 : item.title))))), displaySubType && /*#__PURE__*/React.createElement(View, {
    style: {
      flex: 1,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Text, {
    style: {
      color: 'black',
      marginBottom: 6
    }
  }, "Sub Type"), /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: () => onPressSubTypeListButton(),
    style: {
      flex: 1,
      flexDirection: 'row',
      paddingHorizontal: 20,
      paddingVertical: 12,
      borderWidth: 1,
      borderColor: 'grey',
      borderStyle: 'solid',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Text, {
    style: {
      color: 'black'
    }
  }, selectedSubType === null || selectedSubType === void 0 ? void 0 : selectedSubType.title), /*#__PURE__*/React.createElement(Text, {
    style: {
      color: 'black'
    }
  }, "V")), displaySubTypeListDropdown && /*#__PURE__*/React.createElement(View, {
    style: {
      position: 'absolute',
      zIndex: 150,
      backgroundColor: 'white',
      top: 70,
      width: '100%',
      paddingHorizontal: 20,
      paddingVertical: 12,
      borderWidth: 1,
      borderColor: 'grey',
      borderStyle: 'solid'
    }
  }, subTypeList === null || subTypeList === void 0 ? void 0 : subTypeList.map(item => /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: () => onPressSubTypeItem(item),
    style: {
      flex: 1,
      paddingHorizontal: 20,
      paddingVertical: 12
    }
  }, /*#__PURE__*/React.createElement(Text, {
    style: {
      color: 'black'
    }
  }, item === null || item === void 0 ? void 0 : item.title))))), /*#__PURE__*/React.createElement(View, {
    style: {
      flex: 1,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Text, {
    style: {
      color: 'black',
      marginBottom: 6
    }
  }, "Start"), /*#__PURE__*/React.createElement(View, {
    style: {
      flex: 1,
      flexDirection: 'row'
    }
  }, /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: () => {
      initialDateForm(startDate);
      setDisplayStartDateForm(true);
    },
    style: {
      paddingHorizontal: 20,
      paddingVertical: 12,
      borderWidth: 1,
      borderColor: 'grey',
      borderStyle: 'solid',
      marginRight: 16
    }
  }, /*#__PURE__*/React.createElement(Text, {
    style: {
      color: 'black'
    }
  }, "06.01.2023")), displayStartDateForm && renderDateForm(setStartDate, setDisplayStartDateForm), /*#__PURE__*/React.createElement(TouchableOpacity, {
    style: {
      paddingHorizontal: 20,
      paddingVertical: 12,
      borderWidth: 1,
      borderColor: 'grey',
      borderStyle: 'solid',
      marginRight: 16
    }
  }, /*#__PURE__*/React.createElement(Text, {
    style: {
      color: 'black'
    }
  }, "13:43")))), /*#__PURE__*/React.createElement(View, {
    style: {
      flex: 1,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Text, {
    style: {
      color: 'black',
      marginBottom: 6
    }
  }, "End"), /*#__PURE__*/React.createElement(View, {
    style: {
      flex: 1,
      flexDirection: 'row'
    }
  }, /*#__PURE__*/React.createElement(TouchableOpacity, {
    style: {
      paddingHorizontal: 20,
      paddingVertical: 12,
      borderWidth: 1,
      borderColor: 'grey',
      borderStyle: 'solid',
      marginRight: 16
    }
  }, /*#__PURE__*/React.createElement(Text, {
    style: {
      color: 'black'
    }
  }, "06.01.2023")), /*#__PURE__*/React.createElement(TouchableOpacity, {
    style: {
      paddingHorizontal: 20,
      paddingVertical: 12,
      borderWidth: 1,
      borderColor: 'grey',
      borderStyle: 'solid',
      marginRight: 16
    }
  }, /*#__PURE__*/React.createElement(Text, {
    style: {
      color: 'black'
    }
  }, "14:43")))), /*#__PURE__*/React.createElement(View, {
    style: {
      flex: 1,
      marginBottom: 12,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(TouchableOpacity, {
    style: {
      alignSelf: 'flex-start',
      flexDirection: 'row',
      paddingHorizontal: 20,
      paddingVertical: 12,
      borderWidth: 1,
      borderColor: 'grey',
      borderStyle: 'solid',
      marginRight: 16
    }
  }, /*#__PURE__*/React.createElement(View, {
    style: {
      height: 20,
      width: 20,
      borderWidth: 1,
      borderColor: 'grey',
      borderStyle: 'solid',
      marginRight: 8
    }
  }), /*#__PURE__*/React.createElement(Text, {
    style: {
      color: 'black'
    }
  }, "Half day"))), /*#__PURE__*/React.createElement(View, {
    style: {
      flex: 1,
      marginBottom: 12,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(TouchableOpacity, {
    style: {
      alignSelf: 'flex-start',
      flexDirection: 'row',
      paddingHorizontal: 20,
      paddingVertical: 12,
      borderWidth: 1,
      borderColor: 'grey',
      borderStyle: 'solid',
      marginRight: 16
    }
  }, /*#__PURE__*/React.createElement(View, {
    style: {
      height: 20,
      width: 20,
      borderWidth: 1,
      borderColor: 'grey',
      borderStyle: 'solid',
      marginRight: 8
    }
  }), /*#__PURE__*/React.createElement(Text, {
    style: {
      color: 'black'
    }
  }, "Recurring Event"))), /*#__PURE__*/React.createElement(View, {
    style: {
      flex: 1,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Text, {
    style: {
      color: 'black',
      marginBottom: 6
    }
  }, "Note"), /*#__PURE__*/React.createElement(TextInput, {
    value: "",
    style: {
      flex: 1,
      paddingHorizontal: 20,
      paddingVertical: 12,
      borderWidth: 1,
      borderColor: 'grey',
      borderStyle: 'solid'
    }
  })), /*#__PURE__*/React.createElement(View, {
    style: {
      flex: 1,
      height: 24
    }
  })), /*#__PURE__*/React.createElement(View, {
    style: {
      flexDirection: 'row-reverse',
      paddingHorizontal: 12,
      paddingVertical: 16,
      borderTopColor: 'grey',
      borderTopWidth: 1,
      borderStyle: 'solid'
    }
  }, /*#__PURE__*/React.createElement(TouchableOpacity, {
    style: {
      paddingHorizontal: 20,
      paddingVertical: 12,
      borderWidth: 1,
      borderColor: 'grey',
      borderStyle: 'solid',
      backgroundColor: 'blue'
    }
  }, /*#__PURE__*/React.createElement(Text, {
    style: {
      color: 'white'
    }
  }, "Save")), /*#__PURE__*/React.createElement(TouchableOpacity, {
    style: {
      paddingHorizontal: 20,
      paddingVertical: 12,
      borderWidth: 1,
      borderColor: 'grey',
      borderStyle: 'solid',
      marginRight: 16
    }
  }, /*#__PURE__*/React.createElement(Text, {
    style: {
      color: 'black'
    }
  }, "Cancel")))));
};
//# sourceMappingURL=index.js.map