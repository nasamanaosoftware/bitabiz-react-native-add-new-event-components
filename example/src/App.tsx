import React, { useEffect, useState } from "react";
import { View, ViewStyle, Dimensions, SafeAreaView, ScrollView, TouchableOpacity, Text, TextInput } from "react-native"

export default function App() {

  return <ExampleComponents />;
}

// MARK: Style Import

export const ExampleComponents: React.FunctionComponent = () => {

    const [typeList, setTypeList] = useState([
        {
            title: 'Sick',
            haveSubType: false
        },
        {
            title: 'Out of Office >',
            haveSubType: true
        },
        {
            title: 'Time registration',
            haveSubType: false
        },
        {
            title: 'Overtime/Time off',
            haveSubType: false
        },
        {
            title: 'Mileage',
            haveSubType: false
        }
    ]);

    const [subTypeList, setSubTypeList]  = useState([
        {
            title: 'Travel - EU'
        },
        {
            title: 'Seminar'
        },
        {
            title: 'Private appointment'
        },
        {
            title: 'Travel - US'
        },
        {
            title: 'Work from home'
        },
        {
            title: 'Day off'
        }
    ]);

    const [displaySubType, setDisplaySubType] = useState(false);
    const [selectedType, setSelectedType] = useState({ title: 'Sick', haveSubType: false });
    const [selectedSubType, setSelectedSubType] = useState({ title: 'Work from home' });

    const [displayTypeListDropdown, setDisplayTypeListDropdown] = useState(false);
    const [displaySubTypeListDropdown, setDisplaySubTypeListDropdown] = useState(false);

    const [startDate, setStartDate] = useState('2023-01-06');
    const [startTime, setStartTime] = useState('13:43');
    const [endDate, setEndDate] = useState('2023-01-06');
    const [endTime, setEndTime] = useState('14:43');

    const [displayStartDateForm, setDisplayStartDateForm] = useState(false);
    const [displayEndDateForm, setDisplayEndDateForm] = useState(false);
    const [day, setDay] = useState(1);
    const [month, setMonth] = useState(1);
    const [year, setYear] = useState(1990);

    const initialDateForm = (date: any) => {
        const splitedDate = date?.split('-');

        setDay(parseInt(splitedDate[2]));
        setMonth(parseInt(splitedDate[1]));
        setYear(parseInt(splitedDate[0]));
    }

    const dateSetter = (stateSetter: any) => {
        const _day = day < 10 ? '0' + day : day;
        const _month = month < 10 ? '0' + month : month;
        const _year = year;

        stateSetter?.(_year + '-' + _month + '-' + _day);
    }

    const onPressTypeListButton = () => {
        setDisplayTypeListDropdown(!displayTypeListDropdown);
    }

    const onPressTypeItem = (item: any) => {
        setSelectedType(item);
        setDisplaySubType(item?.haveSubType);
        setDisplayTypeListDropdown(false);
    }

    const onPressSubTypeListButton = () => {
        setDisplaySubTypeListDropdown(!displaySubTypeListDropdown);
    }

    const onPressSubTypeItem = (item: any) => {
        setSelectedSubType(item);
        setDisplaySubTypeListDropdown(false);
    }

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

    const renderDateForm = (date: any, stateSetter: any, displaySetter: any) => {
        return  <View style={{ position: 'absolute' }}>
            <View style={{ flexDirection: 'row', borderWidth: 1, borderColor: 'grey', borderStyle: 'solid' }}>
                <View style={{ flexDirection: 'column' }}>
                    <TouchableOpacity onPress={() => setDay(day + 1)} style={{ height: 40, width: 40, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'black' }}>^</Text>
                    </TouchableOpacity>
                    <TextInput 
                        value={day.toString()}
                        onChangeText={text => setDay(parseInt(text))}
                        keyboardType='numeric'
                        style={{ padding: 8 }}
                    />
                    <TouchableOpacity onPress={() => setDay(day - 1)} style={{ height: 40, width: 40, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'black' }}>V</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'column' }}>
                    <TouchableOpacity onPress={() => setMonth(month + 1)} style={{ height: 40, width: 40, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'black' }}>^</Text>
                    </TouchableOpacity>
                    <TextInput 
                        value={month.toString()}
                        onChangeText={text => setMonth(parseInt(text))}
                        keyboardType='numeric'
                        style={{ padding: 8 }}
                    />
                    <TouchableOpacity onPress={() => setMonth(month - 1)} style={{ height: 40, width: 40, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'black' }}>V</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'column' }}>
                    <TouchableOpacity onPress={() => setMonth(month + 1)} style={{ height: 40, width: 60, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'black' }}>^</Text>
                    </TouchableOpacity>
                    <TextInput 
                        value={month.toString()}
                        onChangeText={text => setMonth(parseInt(text))}
                        keyboardType='numeric'
                        style={{ padding: 8 }}
                    />
                    <TouchableOpacity onPress={() => setMonth(month - 1)} style={{ height: 40, width: 60, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'black' }}>V</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ flexDirection: 'row', borderWidth: 1, borderColor: 'grey', borderStyle: 'solid' }}>
                <TouchableOpacity onPress={() => {
                        dateSetter(stateSetter);
                        displaySetter?.(false);
                    }} >
                    <Text style={{ color: 'black' }}>Ok</Text>
                </TouchableOpacity>
            </View>
        </View>
    }

    // MARK: Render
    return (
        <SafeAreaView testID="dashboardScreen" style={{ flex: 1, backgroundColor: 'white' }} shouldRasterizeIOS>
            <View testID="dashboardMainContainer" style={{ flex: 1 }} shouldRasterizeIOS>

                <View style={{ paddingHorizontal: 20, paddingVertical: 16, borderBottomColor: 'grey', borderBottomWidth: 1,  borderStyle: 'solid' }}>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>Add Event</Text>
                </View>

                <ScrollView style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 12 }}>
                    <View style={{ flex: 1, marginBottom: 12 }}>
                        <Text style={{ color: 'black', marginBottom: 6 }}>Type</Text>
                        <TouchableOpacity onPress={() => onPressTypeListButton()} style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 12, borderWidth: 1, borderColor: 'grey', borderStyle: 'solid', justifyContent: 'space-between' }}>
                            <Text style={{ color: 'black' }}>{selectedType?.title}</Text>
                            <Text style={{ color: 'black' }}>V</Text>
                        </TouchableOpacity>
                        {displayTypeListDropdown && <View style={{ position: 'absolute', zIndex: 100, backgroundColor: 'white', top: 70, width: '100%', paddingHorizontal: 20, paddingVertical: 12, borderWidth: 1, borderColor: 'grey', borderStyle: 'solid' }}>
                            {typeList?.map((item, index) => 
                                <TouchableOpacity onPress={() => onPressTypeItem(item)} style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 12 }}>
                                    <Text style={{ color: 'black' }}>{item?.title}</Text>
                                </TouchableOpacity>
                            )}
                            </View>
                        }
                    </View>

                    {displaySubType && <View style={{ flex: 1, marginBottom: 12 }}>
                        <Text style={{ color: 'black', marginBottom: 6 }}>Sub Type</Text>
                        <TouchableOpacity onPress={() => onPressSubTypeListButton()} style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 12, borderWidth: 1, borderColor: 'grey', borderStyle: 'solid', justifyContent: 'space-between'  }}>
                            <Text style={{ color: 'black' }}>{selectedSubType?.title}</Text>
                            <Text style={{ color: 'black' }}>V</Text>
                        </TouchableOpacity>
                        {displaySubTypeListDropdown && <View style={{ position: 'absolute', zIndex: 150, backgroundColor: 'white', top: 70, width: '100%', paddingHorizontal: 20, paddingVertical: 12, borderWidth: 1, borderColor: 'grey', borderStyle: 'solid' }}>
                            {subTypeList?.map((item, index) => 
                                <TouchableOpacity onPress={() => onPressSubTypeItem(item)} style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 12 }}>
                                    <Text style={{ color: 'black' }}>{item?.title}</Text>
                                </TouchableOpacity>
                            )}
                            </View>
                        }
                    </View>}

                    <View style={{ flex: 1, marginBottom: 12 }}>
                        <Text style={{ color: 'black', marginBottom: 6 }}>Start</Text>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => {
                                initialDateForm(startDate);
                                setDisplayStartDateForm(true);
                            }} style={{ paddingHorizontal: 20, paddingVertical: 12, borderWidth: 1, borderColor: 'grey', borderStyle: 'solid', marginRight: 16 }}>
                                <Text style={{ color: 'black' }}>06.01.2023</Text>
                            </TouchableOpacity>
                            {displayStartDateForm && renderDateForm(startDate, setStartDate, setDisplayStartDateForm)}
                            <TouchableOpacity style={{ paddingHorizontal: 20, paddingVertical: 12, borderWidth: 1, borderColor: 'grey', borderStyle: 'solid', marginRight: 16 }}>
                                <Text style={{ color: 'black' }}>13:43</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flex: 1, marginBottom: 12 }}>
                        <Text style={{ color: 'black', marginBottom: 6 }}>End</Text>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <TouchableOpacity style={{ paddingHorizontal: 20, paddingVertical: 12, borderWidth: 1, borderColor: 'grey', borderStyle: 'solid', marginRight: 16 }}>
                                <Text style={{ color: 'black' }}>06.01.2023</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ paddingHorizontal: 20, paddingVertical: 12, borderWidth: 1, borderColor: 'grey', borderStyle: 'solid', marginRight: 16 }}>
                                <Text style={{ color: 'black' }}>14:43</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flex: 1, marginBottom: 12, marginTop: 6 }}>
                        <TouchableOpacity style={{ alignSelf: 'flex-start', flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 12, borderWidth: 1, borderColor: 'grey', borderStyle: 'solid', marginRight: 16 }}>
                            <View style={{ height: 20, width: 20, borderWidth: 1, borderColor: 'grey', borderStyle: 'solid', marginRight: 8 }} />
                            <Text style={{ color: 'black' }}>Half day</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, marginBottom: 12, marginTop: 6 }}>
                        <TouchableOpacity style={{ alignSelf: 'flex-start', flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 12, borderWidth: 1, borderColor: 'grey', borderStyle: 'solid', marginRight: 16 }}>
                            <View style={{ height: 20, width: 20, borderWidth: 1, borderColor: 'grey', borderStyle: 'solid', marginRight: 8 }} />
                            <Text style={{ color: 'black' }}>Recurring Event</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, marginBottom: 12 }}>
                        <Text style={{ color: 'black', marginBottom: 6 }}>Note</Text>
                        <TextInput 
                            value={""}
                            style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 12, borderWidth: 1, borderColor: 'grey', borderStyle: 'solid' }}
                        />
                    </View>

                    <View style={{ flex: 1, height: 24 }} />
                </ScrollView>

                <View style={{ flexDirection: 'row-reverse', paddingHorizontal: 12, paddingVertical: 16, borderTopColor: 'grey', borderTopWidth: 1,  borderStyle: 'solid' }}>
                    <TouchableOpacity style={{ paddingHorizontal: 20, paddingVertical: 12, borderWidth: 1, borderColor: 'grey', borderStyle: 'solid', backgroundColor: 'blue' }}>
                        <Text style={{ color: 'white' }}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ paddingHorizontal: 20, paddingVertical: 12, borderWidth: 1, borderColor: 'grey', borderStyle: 'solid', marginRight: 16 }}>
                        <Text style={{ color: 'black' }}>Cancel</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    )
}