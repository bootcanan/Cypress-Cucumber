Feature:Tarih, müşteri oluşturma anında oluşturulmalıdır.

    Scenario: TC_001
        Given Girilen tarih, müşteri oluşturma anından daha erken veya geçmişte olamaz.
        Then Tarih ay, gün, yıl, saat ve dakika olarak oluşturulmalıdır.
# Then Kullanıcı kayıtlı kullanıcılardan bir kullanıcı seçebilir ve bu kısmı boş bırakamaz.
# Then Bu kısımda kullanıcı, hesapları yönetmek için oluşturulan bir hesabı seçebilir.
# Then Kullanıcı isteğe bağlı olarak Zelle Enrolled seçeneğini seçebilir ve kaydedebilir.