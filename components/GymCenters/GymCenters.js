import React, { Component } from 'react';
import {View, Text, ScrollView, Button, StyleSheet, TextInput, Image}  from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

class GymCenters extends Component {
  onSelectCenter = (center) => {

  }
  render() {
    const gyms = [
      {
        name: "ARMY FITNESS & YOGA ",
        address: "Location: Tầng 1 - Tòa NO 10A – KĐT Sài Đồng – Long Biên",
        hotline: "Hotline: 094 115 38 83",
        content: "Việc chinh phục cái đẹp không phải là cuộc chiến ngắn hạn mà là cả một hành trình, vậy nên có đồng đội đi cùng thì không có gì là không thể. Với một thiết kế không gian mở để đón ánh sáng tự nhiên, giúp hội viên có tinh thần thư thái mỗi khi tới lớp. Hơn nữa còn có cả phòng trị liệu, phòng tắm xông hơi rộng rãi thoải mái đáp ứng mọi nhu cầu thiết yếu của hội viên. Với một đội ngũ PT chuyên nghiệp,cùng với những bài tập khoa học, luôn tận tình giúp đỡ hội viên trong giờ tập, sẵn sàng giải quyết mọi “ca khó”Dịch vụ chuyên nghiệp số 1 trong phân khúc phòng tập tầm trung,trang thiết bị phòng tập đạt tiêu chuẩn quốc tế với hơn 100 máy tập chuẩn, 1000m2 mặt sàn, đội ngũ nhân viên chuyên nghiệp, thân thiện. Phương châm làm việc: Khách hàng là SỐ 2 không ai là SỐ 1, sức khoẻ và thể hình chuẩn của hội viên là mục tiêu phấn đấu từng ngày của Army.",
        promotion: "Từ ngày 06/05 đến hết ngày 21/05, khi: ĐI TẬP 1 MÌNH, GIẢM 50% giá trị thẻ tập. ĐI TẬP 2 MÌNH GIẢM 50% giá trị thẻ tập cho người thứ nhất và GIẢM 75% giá trị thẻ tập cho người thứ hai. Tập 1 mình lúc nào cũng lủi thủi mà chỉ được giảm 50%, trong khi tập 2 mình lúc nào cũng phơi phới và quan trọng là cả hai được GIẢM TỚI 63% gía trị thẻ tập Chỉ với “ngân sách” CỰC NHỎ, bạn còn được MIỄN PHÍ 02 BUỔI TẬP (trị giá 1 TRIỆU ĐỒNG) CÙNG CÁC PT của Army Fitness"
      },
      {
        name: "FITNESSWORLD",
        address: "Location: Lô 2 Nguyễn Khánh Toàn Hà Nội",
        content: "Tại FITNESSWORLD chúng tôi luôn nỗ lực để mang đến những trải nghiệm thể thao tuyệt vời trong một không gian hiện đại và chuyên nghiệp. Chúng tôi cung cấp dịch vụ tiện nghi, chu đáo với chế độ chăm sóc khách hàng tận tình, cũng như cam kết đạt tiêu chuẩn 5 sao. Các hội viên tại FITNESSWORLD bên cạnh việc rèn luyện thể thao nâng cao sức khỏe sẽ nhận được sự trợ giúp từ đội ngũ tư vấn viên, huấn luyện viên cá nhân với giáo án nổi tiếng LesMills, các bài tập chuyên dụng cũng như thực đơn dinh dưỡng, lộ trình tập…phù hợp với thể trạng, lịch làm việc, chế độ sinh hoạt với cam kết giúp khách hàng đạt được mục tiêu tối ưu nhất.",
        facility: "Mọi mô hình luyện tập và thư giãn hiện đại đều được tích hợp trong không gian FITNESSWORLD. Phòng tập Yoga tách biệt với khu vực tập nhóm tạo sự yên tĩnh tối đa cho hội viên. Phòng tập Group Exercise với rất nhiều loại hình tập luyện theo các giáo trình mới nhất: BodyCombat, Zumba, Latin Pop, Bellydance, Bum and Tum, ABS, Bootcamp…. Các lớp tập phù hợp với mọi lứa tuổi và mọi trình độ. Phòng xông hơi khô, xông hơi ướt. Phòng tắm, khu thay đồ và tủ để đồ cá nhân. Quầy Internet và quầy thư giãn. Bãi đỗ xe ô tô miễn phí, có sức chứa lên đến 40 xe cùng lúc.",
        time: "Thứ 2 đến thứ 6 : 06h00 - 22h00. Thứ 7, Chủ nhật : 07h00 - 21h30"
      }
    ]
    return (
      <ScrollView>
        <Image source={{uri: 'https://cdn6.f-cdn.com/contestentries/17411/5251780/515fcbc7a88d0_thumb900.jpg'}} style={styles.ad}/>
        <Text style={styles.title}>Find your favorite centers</Text>
        <View style={styles.searchSection}>
          <MaterialCommunityIcons style={styles.searchIcon} name="magnify" size={20} color="#000"/>
          <TextInput
              style={styles.input}
              placeholder="Search gym center"
              onChangeText={(searchString) => {this.setState({searchString})}}
              underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.gymContainer}>
          <Text style={styles.gymName}>{gyms[0].name}</Text>
          <Text>{gyms[0].address}</Text>
          <Text>{gyms[0].hotline}</Text>
          <Text style={styles.label}>Description</Text>
          <Text>{gyms[0].content}</Text>
          <Text style={styles.label}>Promotion</Text>
          <Text>{gyms[0].promotion}</Text>
          <View style={styles.imageHolder}>
            <Image source={require('./Army/1.jpg')} style={styles.gymImage} />
            <Image source={require('./Army/2.jpg')} style={styles.gymImage} />
            <Image source={require('./Army/3.jpg')} style={styles.gymImage} />
          </View>
          <View style={styles.imageHolder}>
            <Image source={require('./Army/4.jpg')} style={styles.gymImage} />
            <Image source={require('./Army/5.jpg')} style={styles.gymImage} />
            <Image source={require('./Army/6.jpg')} style={styles.gymImage} />
          </View>
          <View style={styles.Button}>
            <Button title="Follow" color="orange" onPress={this.onSelectCenter}/>
          </View>
        </View>
        <View style={styles.gymContainer}>
          <Text style={styles.gymName}>{gyms[1].name}</Text>
          <Text>{gyms[1].address}</Text>
          <Text style={styles.label}>Description</Text>
          <Text>{gyms[1].content}</Text>
          <Text style={styles.label}>Facility</Text>
          <Text>{gyms[1].facility}</Text>
          <Text style={styles.label}>Time</Text>
          <Text>{gyms[1].time}</Text>
          <View style={styles.imageHolder}>
            <Image source={require('./FitnessWorld/1.jpg')} style={styles.gymImage} />
            <Image source={require('./FitnessWorld/2.jpg')} style={styles.gymImage} />
            <Image source={require('./FitnessWorld/3.jpg')} style={styles.gymImage} />
          </View>
          <View style={styles.imageHolder}>
            <Image source={require('./FitnessWorld/4.jpg')} style={styles.gymImage} />
            <Image source={require('./FitnessWorld/5.jpg')} style={styles.gymImage} />
            <Image source={require('./FitnessWorld/6.jpg')} style={styles.gymImage} />
          </View>
          <View style={styles.Button}>
            <Button title="Follow" color="orange" onPress={this.onSelectCenter}/>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles =  StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 10,
    width: '90%',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'orange',
    marginBottom: 20
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
  ad: {
    width: '100%',
    height: 50,
    marginBottom: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  gymImage: {
    height: 90,
    width: 100
  },
  imageHolder: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 3
  },
  gymContainer: {
    padding: 5,
    margin: 2,
    borderWidth: 2,
    borderColor: 'orange',
    borderRadius: 10,
    marginBottom: 5
  },
  gymName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  Button: {
    marginTop: 10,
    width: 100,
    alignSelf: 'center'
  }
})

export default GymCenters;