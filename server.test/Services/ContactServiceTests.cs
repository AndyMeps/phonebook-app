using server.Interfaces;
using Server.Models;
using Server.Services;
using System.Collections.Generic;
using Xunit;



namespace server.test.Services
{
    public class ContactServiceTests
    {
        [Fact]
        public void GetAll_ShouldReturnAllAdded()
        {
            // Arrange
            var service = _getSingleContactService();

            // Act
            var result = service.GetContactList().Count;

            // Assert
            Assert.Equal(1, result);
        }

        [Fact]
        public void GetAll_ShouldReturnSeedDataIfNotPassedIn()
        {
            // Arrange
            var service = new ContactService();

            // Act
            var result = service.GetContactList().Count;

            // Assert
            Assert.Equal(2, result);
        }

        [Fact]
        public void GetById_ShouldReturnExistingContact()
        {
            // Arrange
            var service = _getSingleContactService();

            // Act
            var result = service.GetById(1).Id;

            // Assert
            Assert.Equal(1, result);
        }

        [Fact]
        public void GetById_ShouldReturnNullIfNotFound()
        {
            // Arrange
            var service = _getEmptyService();

            // Act
            var result = service.GetById(1);

            // Assert
            Assert.Null(result);
        }

        [Fact]
        public void Create_ShouldStartAtOne()
        {
            // Arrange
            var service = _getEmptyService();

            // Act
            var result = service.Create("Test", "Contact", null, null, null, null).Id;

            // Assert
            Assert.Equal(1, result);
        }

        [Fact]
        public void Create_ShouldIncrementId()
        {
            // Arrange
            var service = _getSingleContactService();

            // Act
            var result = service.Create("Test2", "Contact", null, null, null, null).Id;

            // Assert
            Assert.Equal(2, result);
        }

        [Fact]
        public void Update_ShouldThrowKeyExceptionIfNoUser()
        {
            // Arrange
            var service = _getEmptyService();

            // Act / Assert
            Assert.Throws<KeyNotFoundException>(() =>
            {
                service.Update(1, "Test2", null, null, null, null, null);
            });
        }

        [Fact]
        public void Update_ShouldUpdateAllFields()
        {
            // Arrange
            var service = _getSingleContactService();

            // Act
            var result = service.Update(1, "John", "Smith", "john.smith@email.com", "+441227525252", "+441234567890", "image-hash");
            var foundUpdated = service.GetById(1);

            // Assert
            Assert.NotNull(result);
            Assert.NotNull(foundUpdated);
            Assert.Equal(foundUpdated.Id, 1);
            Assert.Equal(foundUpdated.FirstName, "John");
            Assert.Equal(foundUpdated.LastName, "Smith");
            Assert.Equal(foundUpdated.Email, "john.smith@email.com");
            Assert.Equal(foundUpdated.HomeNumber, "+441227525252");
            Assert.Equal(foundUpdated.MobileNumber, "+441234567890");
            Assert.Equal(foundUpdated.ImageHash, "image-hash");
        }

        [Fact]
        public void Update_ShouldNotUpdateNull()
        {
            // Arrange
            var contacts = new List<Contact>
            {
                new Contact(1, "John", "Smith", "john.smith@email.com", "+441227525252", "+441234567890", "image-hash")
            };
            var service = new ContactService(contacts);

            // Act
            var result = service.Update(1, null, null, null, null, null, null);
            var foundUpdated = service.GetById(1);

            // Assert
            Assert.NotNull(result);
            Assert.NotNull(foundUpdated);
            Assert.Equal(foundUpdated.Id, 1);
            Assert.Equal(foundUpdated.FirstName, "John");
            Assert.Equal(foundUpdated.LastName, "Smith");
            Assert.Equal(foundUpdated.Email, "john.smith@email.com");
            Assert.Equal(foundUpdated.HomeNumber, "+441227525252");
            Assert.Equal(foundUpdated.MobileNumber, "+441234567890");
            Assert.Equal(foundUpdated.ImageHash, "image-hash");
        }

        [Fact]
        public void Delete_ShouldNotThrowIfNotFound()
        {
            // Arrange
            var service = _getEmptyService();

            // Act
            service.DeleteById(1);

            // Assert - noop
        }

        [Fact]
        public void Delete_ShouldRemoveContactIfFound()
        {
            // Arrange
            var service = _getSingleContactService();

            // Act
            var checkExists = service.GetById(1);
            service.DeleteById(1);
            var result = service.GetById(1);

            // Assert
            Assert.NotNull(checkExists);
            Assert.Null(result);
        }

        /* ============================================================================ */
        /* ========================= HELPER FUNCTIONS BELOW =========================== */
        /* ============================================================================ */

        /// <summary>
        /// Get contact service with no contacts.
        /// </summary>
        private IContactService _getEmptyService()
        {
            var contacts = new List<Contact>();
            return new ContactService(contacts);
        }

        /// <summary>
        /// Get contact service with a single contact.
        /// </summary>
        private IContactService _getSingleContactService()
        {
            var contacts = new List<Contact>
            {
                new Contact(1, "Test", "Contact")
            };

            return new ContactService(contacts);
        }
    }
}
