import * as React from 'react';
import {
  View, StyleSheet,
  Text, TouchableOpacity,
  Image, FlatList, Easing,
} from 'react-native';
import HeaderComponent from '../../components/header.component';
import Star from '../../components/starrating';

const images = {
  starFilled: require('../../../assets/images/icon_star.png'),
  starUnfilled: require('../../../assets/images/star_unfill.png'),
  share: require('../../../assets/images/ic_share.png'),
};

const ComponentLeft = () =>
  <View style={{ flex: 1, alignItems: 'flex-start' }} >
    <Image
      source={require('../../../assets/images/ic_menu.png')}
      style={{ resizeMode: 'contain', width: 25, height: 25, marginLeft: 10, alignSelf: 'flex-start' }}
    />
  </View>;

export interface MedicamentProps {
}

export interface MedicamentState {
  contents: any;
}


export default class MedicamentComponent extends React.Component<MedicamentProps, MedicamentState> {
  constructor(props: MedicamentProps) {
    super(props);
    this.state = {
      contents: [
        {
          id: 1,
          title: 'Dùng theo cách này, nấm linh chi thành độc dược',
          description: 'nam linh chi',
          contents: `Ngoài ra, linh chi còn được dùng để nâng cao sức đề kháng của cơ thể, bồi bổ sức khỏe và kéo dài tuổi thọ, đặc biệt đối với người cao tuổi. Với phụ nữ, linh chi được dùng để làm đẹp da, chống các nếp nhăn và các vết sắc tố.
          Công nhận những tác dụng tốt của nấm linh chi, nhưng GS.TS, BSCKII Dương Trọng Hiếu, chuyên khoa Nội Y học cổ truyền, Bệnh Y học cổ truyền Trung ương, lưu ý những tác dụng này chỉ có được khi dùng đúng liều lượng.`,
          image: 'https://cdn.24h.com.vn/upload/4-2018/images/2018-10-28/Dung-theo-cach-nay-nam-linh-chi-thanh-doc-duoc-1-1540689781-30-width665height449.jpg',
          star: 4.5,
          author: 'Tinh Ngo',
          createDate: 0,
          updateDate: 0,
        },
        {
          id: 2,
          title: 'Lợi ích sức khỏe của nước ép cải bắp với chanh',
          description: 'nam linh chi',
          contents: `Lấy một vài lá bắp cải tươi, cắt nhỏ và thêm 2 thìa nước cốt chanh. Bỏ chúng vào máy xay sinh tố xay cùng với một chút nước. Bạn nên uống loại nước ép này mỗi buổi sáng trước khi ăn sáng trong vòng ít nhất 2 tháng. Loại nước này có những tác dụng với sức khỏe như sau:`,
          image: 'https://cdn.24h.com.vn/upload/4-2018/images/2018-10-26/Loi-ich-suc-khoe-cua-nuoc-ep-cai-bap-voi-chanh-1-1540516275-917-width600height450.jpg',
          star: 4.5,
          author: 'Tinh Ngo',
          createDate: 0,
          updateDate: 0,
        },
        {
          id: 3,
          title: 'Lý do để bạn nên ăn đu đủ mỗi ngày',
          description: 'nam linh chi',
          contents: `Thành phần trong quả đu đủ
          Đu đủ chín chứa khoảng 90% nước, 13% đường, không có tinh bột, có nhiều carotenoit acid hữu cơ, vitamin: A, B, C, 0,9% chất béo, xenluloz (0,5%), canxi, photpho, magiê, sắt, thiamin, riboflavin.
          Một kết quả nghiên cứu khác cho thấy, trong 100g đu đủ có 74 - 80mg vitamin C (vitamin chủ yếu trong đu đủ), caroten (tiền vitamine A) 500 - 1.250UI. Ngoài ra, còn có các vitamin B1, B2, các acid gây men, các khoáng chất như: kali (179mg), canxi, magiê, sắt và kẽm.`,
          image: 'https://cdn.24h.com.vn/upload/4-2018/images/2018-10-22/Ly-do-de-ban-nen-an-du-du-moi-ngay-du-du-1540170021-210-width640height384.jpg',
          star: 4.5,
          author: 'Tinh Ngo',
          createDate: 0,
          updateDate: 0,
        },
        {
          id: 4,
          title: 'Tổ yến là thực phẩm cao cấp ở vùng Á Đông, là 1 trong 8 món ăn nổi tiếng: yến sào, bào ngư, hải sâm, vây cá mập, đế chân voi, bàn tay gấu',
          description: 'nam linh chi',
          contents: `Người ta thường khai thác tổ yến để làm thực phẩm và làm thuốc.
          Tổ yến khai thác về được chải sạch chất bẩn, nhặt bỏ hết lông tơ, rồi phân thành từng loại.
          Tổ yến chứa 42,8 - 54,9% protein; nhiều glucose; các acid amin cần thiết khó thay thế: cystein, phenyllamin, tyrosin...; các vitamin B, C, E, PP; các muối natri, sắt, phosphor và các nguyên tố vi lượng. Một số nghiên cứu mới đây cho thấy: yến sào có tác dụng ích khí, cường dương, kích dục, có lợi cho phổi và thận, rất tốt cho da, tăng hấp thu các chất dinh dưỡng và kích thích sự phân chia các tế bào của hệ miễn dịch. Do đó, yến sào được cho là thuốc “cải lão hoàng đồng”, làm chậm quá trình lão hóa.`,
          image: 'https://cdn.24h.com.vn/upload/4-2018/images/2018-10-16/To-yen-giup-cai-lao-hoan-dong-to-yen-1539674030-747-width500height374.jpg',
          star: 4.5,
          author: 'Tinh Ngo',
          createDate: 0,
          updateDate: 0,
        },
        {
          id: 5,
          title: 'Bài thuốc trị sỏi tiết niệu',
          description: 'nam linh chi',
          contents: `Y học cổ truyền gọi sỏi tiết niệu là thạch lâm, sa lâm (sỏi nhỏ gọi là sa lâm, sỏi to gọi là thạch lâm). Nguyên nhân chủ yếu là do chứng thấp nhiệt  làm nước tiểu bị ứ đọng lại thành sỏi. Y học cổ truyền chia sỏi tiết niệu làm nhiều thể khác nhau như: thấp nhiệt, can uất khí trệ, thận hư. Sau đây là một số bài thuốc chữa sỏi niệu kèm thận hư.`,
          image: 'https://cdn.24h.com.vn/upload/3-2018/images/2018-09-06/Bai-thuoc-tri-soi-tiet-nieu-moc_thong-1536216698-858-width450height337.jpg',
          star: 4.5,
          author: 'Tinh Ngo',
          createDate: 0,
          updateDate: 0,
        },
        {
          id: 6,
          title: '5 bài thuốc phòng, trị viêm mũi dị ứng',
          description: 'nam linh chi',
          contents: `Theo y học cổ truyền, nguyên nhân gây viêm mũi dị ứng có ngoại nhân và nội nhân. Về ngoại nhân, có 6 nguyên nhân (lục dâm): phong, hàn, thử, thấp, táo, hỏa. Trong đó có 3 nguyên nhân trực tiếp, ảnh hưởng nhất đến viêm mũi dị ứng là phong (gió), hàn (lạnh), thấp (ẩm ướt). Về nội nhân có nguyên nhân: hỷ, nộ, ưu, tư, bi, khủng, kinh. Trong đó “ưu” trực tiếp ảnh hưởng đến mũi, đến phế (ưu sầu hại phế).`,
          image: 'https://cdn.24h.com.vn/upload/3-2018/images/2018-08-28/1535443502-602-7_resize-1535443503-width363height375.jpg',
          star: 4.5,
          author: 'Tinh Ngo',
          createDate: 0,
          updateDate: 0,
        },
      ],
    };
  }

  public render() {
    return (
      <View style={styles.container}>
        <HeaderComponent
          componentLeft={ComponentLeft}
        />
        <FlatList
          data={this.state.contents}
          keyExtractor={(item, index) => (item as any).id.toString()}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  marginTop: 10,
                }}
              >
                <View
                  style={{
                    height: 100,
                    flexDirection: 'row', alignItems: 'center',
                  }}
                >
                  <View
                    style={{ flexDirection: 'column', width: 1, flexGrow: 1 }}
                  >
                    <Text
                      style={{
                        margin: 5,
                        fontSize: 13,
                        fontWeight: '600',
                        fontFamily: 'arial',
                        height: 55,
                      }}
                      numberOfLines={3}
                    >{(item as any).title}
                    </Text>
                  </View>
                  <Image
                    borderRadius={10}
                    style={{ width: 80, height: 80, resizeMode: 'cover' }}
                    source={{ uri: (item as any).image }} />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                  }}
                >
                  <Star
                    max={5}
                    initial={5}
                    onChange={(rating: number) => console.log(rating)}
                    selectedStar={images.starFilled}
                    unselectedStar={images.starUnfilled}
                    config={{
                      easing: Easing.inOut(Easing.ease),
                      duration: 350,
                    }}
                    stagger={50}
                    maxScale={1.6}
                    starStyle={{
                      width: 11,
                      height: 11,
                      margin: 1,
                    }}
                    editable={false}
                  />
                  <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                  }}>
                    <Text
                      style={{
                        fontSize: 11,
                        marginLeft: 5,
                        fontFamily: 'arial',
                        marginRight: 5,
                        fontWeight: '600',
                      }}
                    >{(item as any).author}
                    </Text>
                    <Image
                      style={{
                        width: 13, height: 13,
                        marginRight: 5,
                       }}
                      source={images.share}
                    />
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: '#CCCCCC',
                    height: 1,
                    marginTop: 5,
                  }}
                />
              </View>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
